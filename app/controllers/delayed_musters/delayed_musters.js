'use strict';

const Queries = require('../../helpers/queries');

exports.show = {
    description: 'Delayed musters tables',
    auth: {
        mode: 'optional'
    },
    plugins: {
        'hapi-auth-cookie': {
            redirectTo: false // '/login' if set redirects to ./login.
        }
    },
    handler: function (request, reply) {
        const pachayat_code = request.query.pc
        var sequelize = request.server.plugins.sequelize.db.sequelize;

        var queryString = Queries.panchayat_delayed_musters(pachayat_code);

        console.log(queryString)
        sequelize
            .query(queryString, {
                type: sequelize.QueryTypes.SELECT
            })
            .then(function (rows) {

                if (rows.length == 0) {
                    return reply.view('delayed_musters/delayed_musters', {error: 'No delayed musters found'});
                }

                const today = new Date()

                const delayed_muster_rows = rows.map(function (d) {

                    const end_date = new Date(d.end_date)

                    const date_t8 = addDays(end_date, 8)

                    let days_delayed = -1
                    let delay_step = ''

                    switch (d.step) {
                        case "ds_t2":
                            delay_step = 'T + 2'
                            const date_t2 = addDays(end_date, 2)
                            days_delayed = datediff(date_t2, today)
                            break;
                        case "ds_t5":
                            delay_step = 'T + 5'
                            const date_t5 = addDays(end_date, 5)
                            days_delayed = datediff(date_t5, today)
                            break;
                        case "ds_t6":
                            delay_step = 'T + 6'
                            const date_t6 = addDays(end_date, 6)
                            days_delayed = datediff(date_t6, today)
                            break;
                        case "ds_t7":
                            delay_step = 'T + 7'
                            const date_t7 = addDays(end_date, 7)
                            days_delayed = datediff(date_t7, today)
                            break;
                        case "ds_t8":
                            delay_step = 'T + 8'
                            days_delayed = datediff(date_t8, today)
                            break;
                    }

                    return {
                        msr_no: d.msr_no,
                        work_name: d.work_name,
                        work_code: d.work_code,
                        end_date: d.end_date,
                        delay_step: delay_step,
                        days_delayed: days_delayed,
                        date_t8: date_t8
                    };
                })

                const actionable_musters = delayed_muster_rows.filter(function (a) {
                    const days_since_t8 = datediff(a.date_t8, today)
                    return days_since_t8 < 1
                }).sort(sortMusters).map(createObj)

                const other_musters = delayed_muster_rows.filter(function (a) {
                    const days_since_t8 = datediff(a.date_t8, today)
                    return days_since_t8 >= 1
                }).sort(sortMusters).map(createObj)

                return reply.view('delayed_musters/delayed_musters', {
                    actionable_musters: actionable_musters,
                    other_musters: other_musters,
                    panchayat_name: rows[0].panchayat_name
                });
            });


    }
};

function sortMusters(a, b) {
    if (a.delay_step === b.delay_step) {
        if (a.days_delayed === b.days_delayed) {
            return a.msr_no - b.msr_no
        }
        return b.days_delayed - a.days_delayed
    }
    return a.delay_step.localeCompare(b.delay_step)
}

function createObj(d, i) {
    return {
        'क्र.सं.<br>(1)': i + 1,
        'वर्क कोड<br>(2)': d.work_code,
        'MR नंबर<br>(3)': d.msr_no,
        'जिस कदम पर विलंबित है<br>(4)': d.delay_step,
        'जितने दिन से इस कदम पर विलंबित है<br>(5)': d.days_delayed,
        'जिस दिन MR बंद हुआ (T)<br>(6)': formatDate(d.end_date),
        'T + 8 दिनांक<br>(7)': formatDate(d.date_t8)
    };
}

function formatDate(d) {
    function pad(s) {
        return (s < 10) ? '0' + s : s;
    }

    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
