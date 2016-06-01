'use strict';

exports.overviewPerformance = function(REGION_CODE, ROLE) {
    if (ROLE === 'block') {
        return "SELECT state_code,state_name,SUM(total_transactions) tot_trn,YEAR(date) AS year, MONTH(date) AS month,ROUND(sum(mrc_mre_mean*total_transactions)/sum(total_transactions),2) mrc_mre,ROUND(sum(mre_wlg_mean*total_transactions)/sum(total_transactions),2) mre_wlg,ROUND(sum(wlg_wls_mean*total_transactions)/sum(total_transactions),2) wlg_wls,ROUND(sum(wls_fto_mean*total_transactions)/sum(total_transactions),2) wls_fto,ROUND(sum(fto_firstsign_mean*total_transactions)/sum(total_transactions),2) fto_sn1,ROUND(sum(firstsign_secondsign_mean*total_transactions)/sum(total_transactions),2) sn1_sn2,ROUND(sum(secondsign_processed_mean*total_transactions)/sum(total_transactions),2) sn2_prc FROM state_delays_duration a WHERE a.gender = 'both' AND a.bank_type = 'all' AND a.date_type = 'processed_date' AND a.total_transactions > 0 AND a.state_code in (SELECT b.state_code FROM blocks b WHERE b.block_code ='" + REGION_CODE + "') GROUP BY YEAR(date), MONTH(date) ORDER BY date;" +
            "SELECT district_code,district_name,SUM(total_transactions) tot_trn,YEAR(date) AS year, MONTH(date) AS month,ROUND(sum(mrc_mre_mean*total_transactions)/sum(total_transactions),2) mrc_mre,ROUND(sum(mre_wlg_mean*total_transactions)/sum(total_transactions),2) mre_wlg,ROUND(sum(wlg_wls_mean*total_transactions)/sum(total_transactions),2) wlg_wls,ROUND(sum(wls_fto_mean*total_transactions)/sum(total_transactions),2) wls_fto,ROUND(sum(fto_firstsign_mean*total_transactions)/sum(total_transactions),2) fto_sn1,ROUND(sum(firstsign_secondsign_mean*total_transactions)/sum(total_transactions),2) sn1_sn2,ROUND(sum(secondsign_processed_mean*total_transactions)/sum(total_transactions),2) sn2_prc FROM district_delays_duration a WHERE a.gender = 'both' AND a.bank_type = 'all' AND a.date_type = 'processed_date' AND a.total_transactions > 0 AND a.district_code in (SELECT b.district_code FROM blocks b WHERE b.block_code ='" + REGION_CODE + "') GROUP BY YEAR(date), MONTH(date) ORDER BY date;" + 
            "SELECT block_code,block_name,SUM(total_transactions) tot_trn,YEAR(date) AS year, MONTH(date) AS month,ROUND(sum(mrc_mre_mean*total_transactions)/sum(total_transactions),2) mrc_mre,ROUND(sum(mre_wlg_mean*total_transactions)/sum(total_transactions),2) mre_wlg,ROUND(sum(wlg_wls_mean*total_transactions)/sum(total_transactions),2) wlg_wls,ROUND(sum(wls_fto_mean*total_transactions)/sum(total_transactions),2) wls_fto,ROUND(sum(fto_firstsign_mean*total_transactions)/sum(total_transactions),2) fto_sn1,ROUND(sum(firstsign_secondsign_mean*total_transactions)/sum(total_transactions),2) sn1_sn2,ROUND(sum(secondsign_processed_mean*total_transactions)/sum(total_transactions),2) sn2_prc FROM block_delays_duration WHERE gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date' AND total_transactions > 0 AND block_code ='" + REGION_CODE + "' GROUP BY YEAR(date), MONTH(date) ORDER BY date;" +
            "SELECT block_code,block_name,total_transactions tot_trn,date,ROUND(mrc_mre_mean,2) mrc_mre,ROUND(mre_wlg_mean,2) mre_wlg,ROUND(wlg_wls_mean,2) wlg_wls,ROUND(wls_fto_mean,2) wls_fto,ROUND(fto_firstsign_mean,2) fto_sn1,ROUND(firstsign_secondsign_mean,2) sn1_sn2,ROUND(secondsign_processed_mean,2) sn2_prc FROM block_delays_duration WHERE gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date' AND total_transactions > 0 AND block_code ='" + REGION_CODE + "' ORDER BY date;";
    } else if (ROLE === 'district') {
        return "SELECT state_code,state_name,SUM(total_transactions) tot_trn,YEAR(date) AS year, MONTH(date) AS month,ROUND(sum(mrc_mre_mean*total_transactions)/sum(total_transactions),2) mrc_mre,ROUND(sum(mre_wlg_mean*total_transactions)/sum(total_transactions),2) mre_wlg,ROUND(sum(wlg_wls_mean*total_transactions)/sum(total_transactions),2) wlg_wls,ROUND(sum(wls_fto_mean*total_transactions)/sum(total_transactions),2) wls_fto,ROUND(sum(fto_firstsign_mean*total_transactions)/sum(total_transactions),2) fto_sn1,ROUND(sum(firstsign_secondsign_mean*total_transactions)/sum(total_transactions),2) sn1_sn2,ROUND(sum(secondsign_processed_mean*total_transactions)/sum(total_transactions),2) sn2_prc FROM state_delays_duration a WHERE a.gender = 'both' AND a.bank_type = 'all' AND a.date_type = 'processed_date' AND a.total_transactions > 0 AND a.state_code in (SELECT b.state_code FROM districts b WHERE b.district_code ='" + REGION_CODE + "') GROUP BY YEAR(date), MONTH(date) ORDER BY date;" +
            "SELECT district_code,district_name,SUM(total_transactions) tot_trn,YEAR(date) AS year, MONTH(date) AS month,ROUND(sum(mrc_mre_mean*total_transactions)/sum(total_transactions),2) mrc_mre,ROUND(sum(mre_wlg_mean*total_transactions)/sum(total_transactions),2) mre_wlg,ROUND(sum(wlg_wls_mean*total_transactions)/sum(total_transactions),2) wlg_wls,ROUND(sum(wls_fto_mean*total_transactions)/sum(total_transactions),2) wls_fto,ROUND(sum(fto_firstsign_mean*total_transactions)/sum(total_transactions),2) fto_sn1,ROUND(sum(firstsign_secondsign_mean*total_transactions)/sum(total_transactions),2) sn1_sn2,ROUND(sum(secondsign_processed_mean*total_transactions)/sum(total_transactions),2) sn2_prc FROM district_delays_duration a WHERE a.gender = 'both' AND a.bank_type = 'all' AND a.date_type = 'processed_date' AND a.total_transactions > 0 AND a.district_code='" + REGION_CODE + "' GROUP BY YEAR(date), MONTH(date) ORDER BY date;" +             
            "SELECT district_code,district_name,total_transactions tot_trn,date,ROUND(mrc_mre_mean,2) mrc_mre,ROUND(mre_wlg_mean,2) mre_wlg,ROUND(wlg_wls_mean,2) wlg_wls,ROUND(wls_fto_mean,2) wls_fto,ROUND(fto_firstsign_mean,2) fto_sn1,ROUND(firstsign_secondsign_mean,2) sn1_sn2,ROUND(secondsign_processed_mean,2) sn2_prc FROM district_delays_duration WHERE gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date' AND total_transactions > 0 AND district_code ='" + REGION_CODE + "' ORDER BY date;";
    }

};

exports.discretePerformance = function(REGION_CODE, ROLE) {
    if (ROLE === 'block') {
        return "SELECT block_name AS region_name FROM blocks WHERE block_code = '" + REGION_CODE + "';" +
            "SELECT panchayat_code AS region_code,panchayat_name AS region_name,total_transactions tot_trn,date,ROUND(mrc_mre_mean,2) mrc_mre,ROUND(mre_wlg_mean,2) mre_wlg,ROUND(wlg_wls_mean,2) wlg_wls,ROUND(wls_fto_mean,2) wls_fto,ROUND(fto_firstsign_mean,2) fto_sn1,ROUND(firstsign_secondsign_mean,2) sn1_sn2,ROUND(secondsign_processed_mean,2) sn2_prc FROM panchayat_delays_duration WHERE gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date' AND total_transactions > 0 AND panchayat_code <> '0000000000' AND block_code ='" + REGION_CODE + "' ORDER BY panchayat_code, date;" +
            "SELECT staff_id, name, task_assign, mobile_no, map_location, mapped_panchayat_name FROM employees WHERE task_assign IN ('TA','GRS') AND block_code = '" + REGION_CODE + "';" +
            "SELECT a.panchayat_code AS region_code, b.task_assign FROM (SELECT DISTINCT panchayat_code FROM panchayat_delays_duration WHERE block_code = '" + REGION_CODE + "' AND panchayat_code <> '0000000000' AND gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date') a LEFT JOIN (SELECT map_location, task_assign FROM employees WHERE block_code = '" + REGION_CODE + "' AND task_assign = 'TA') b ON a.panchayat_code = b.map_location;" +
            "SELECT a.panchayat_code AS region_code, b.task_assign FROM (SELECT DISTINCT panchayat_code FROM panchayat_delays_duration WHERE block_code = '" + REGION_CODE + "' AND panchayat_code <> '0000000000' AND gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date') a LEFT JOIN (SELECT map_location, task_assign FROM employees WHERE block_code = '" + REGION_CODE + "' AND task_assign = 'GRS') b ON a.panchayat_code = b.map_location;" +
            "SELECT b.staff_id AS staff_id, ROUND(SUM(a.mrc_mre_mean * a.total_transactions) / SUM(a.total_transactions),0) AS step1_avg, SUM(total_transactions) as total_transactions FROM (SELECT panchayat_code, mrc_mre_mean, total_transactions FROM panchayat_delays_duration WHERE block_code = '" + REGION_CODE + "' AND panchayat_code <> '0000000000' AND gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date' AND total_transactions>0 AND date > sysdate()-30) a RIGHT JOIN (SELECT staff_id, map_location FROM employees WHERE task_assign='TA' AND block_code = '" + REGION_CODE + "') b ON a.panchayat_code = b.map_location GROUP BY staff_id;" +
            "SELECT b.staff_id AS staff_id, ROUND(SUM(a.mrc_mre_mean * a.total_transactions) / SUM(a.total_transactions),0) AS step1_avg, SUM(total_transactions) as total_transactions FROM (SELECT panchayat_code, mrc_mre_mean, total_transactions FROM panchayat_delays_duration WHERE block_code = '" + REGION_CODE + "' AND panchayat_code <> '0000000000' AND gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date' AND total_transactions>0 AND date > sysdate()-30) a RIGHT JOIN (SELECT staff_id, map_location FROM employees WHERE task_assign='GRS' AND block_code = '" + REGION_CODE + "') b ON a.panchayat_code = b.map_location GROUP BY staff_id;" +
            "SELECT b.staff_id AS staff_id, ROUND(SUM(a.mrc_mre_mean * a.total_transactions) / SUM(a.total_transactions),0) AS step1_avg, SUM(total_transactions) as total_transactions FROM (SELECT panchayat_code, mrc_mre_mean, total_transactions FROM panchayat_delays_duration WHERE block_code = '" + REGION_CODE + "' AND panchayat_code <> '0000000000' AND gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date' AND total_transactions>0 AND date > sysdate()-60) a RIGHT JOIN (SELECT staff_id, map_location FROM employees WHERE task_assign='TA' AND block_code = '" + REGION_CODE + "') b ON a.panchayat_code = b.map_location GROUP BY staff_id;" +
            "SELECT b.staff_id AS staff_id, ROUND(SUM(a.mrc_mre_mean * a.total_transactions) / SUM(a.total_transactions),0) AS step1_avg, SUM(total_transactions) as total_transactions FROM (SELECT panchayat_code, mrc_mre_mean, total_transactions FROM panchayat_delays_duration WHERE block_code = '" + REGION_CODE + "' AND panchayat_code <> '0000000000' AND gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date' AND total_transactions>0 AND date > sysdate()-60) a RIGHT JOIN (SELECT staff_id, map_location FROM employees WHERE task_assign='GRS' AND block_code = '" + REGION_CODE + "') b ON a.panchayat_code = b.map_location GROUP BY staff_id;" +
            "SELECT b.staff_id AS staff_id, ROUND(SUM(a.mrc_mre_mean * a.total_transactions) / SUM(a.total_transactions),0) AS step1_avg, SUM(total_transactions) as total_transactions FROM (SELECT panchayat_code, mrc_mre_mean, total_transactions FROM panchayat_delays_duration WHERE block_code = '" + REGION_CODE + "' AND panchayat_code <> '0000000000' AND gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date' AND total_transactions>0) a RIGHT JOIN (SELECT staff_id, map_location FROM employees WHERE task_assign='TA' AND block_code = '" + REGION_CODE + "') b ON a.panchayat_code = b.map_location GROUP BY staff_id;" +
            "SELECT b.staff_id AS staff_id, ROUND(SUM(a.mrc_mre_mean * a.total_transactions) / SUM(a.total_transactions),0) AS step1_avg, SUM(total_transactions) as total_transactions FROM (SELECT panchayat_code, mrc_mre_mean, total_transactions FROM panchayat_delays_duration WHERE block_code = '" + REGION_CODE + "' AND panchayat_code <> '0000000000' AND gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date' AND total_transactions>0) a RIGHT JOIN (SELECT staff_id, map_location FROM employees WHERE task_assign='GRS' AND block_code = '" + REGION_CODE + "') b ON a.panchayat_code = b.map_location GROUP BY staff_id;" +
            "SELECT a.total_panchayat_count, b.ta_panchayat_count, c.grs_panchayat_count FROM (SELECT block_code, IFNULL(count(*),0) AS total_panchayat_count FROM panchayats WHERE block_code = '" + REGION_CODE + "') a LEFT JOIN (SELECT block_code, IFNULL(count(*),0) AS ta_panchayat_count FROM employees WHERE task_assign = 'TA' AND block_code = '" + REGION_CODE + "') b ON a.block_code = b.block_code LEFT JOIN (SELECT block_code, IFNULL(count(*),0) AS grs_panchayat_count FROM employees WHERE task_assign = 'GRS' AND block_code = '" + REGION_CODE + "') c ON a.block_code = c.block_code;";
    } else if (ROLE === 'district') {
        return "SELECT district_name AS region_name FROM districts WHERE district_code = '" + REGION_CODE + "';" +
            "SELECT block_code AS region_code,block_name AS region_name,total_transactions tot_trn,date,ROUND(mrc_mre_mean,2) mrc_mre,ROUND(mre_wlg_mean,2) mre_wlg,ROUND(wlg_wls_mean,2) wlg_wls,ROUND(wls_fto_mean,2) wls_fto,ROUND(fto_firstsign_mean,2) fto_sn1,ROUND(firstsign_secondsign_mean,2) sn1_sn2,ROUND(secondsign_processed_mean,2) sn2_prc FROM block_delays_duration WHERE gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date' AND total_transactions > 0 AND district_code ='" + REGION_CODE + "' ORDER BY block_code, date;" +
            "SELECT block_code, panchayat_code, panchayat_name FROM panchayats WHERE district_code = '" + REGION_CODE + "';";
    }

};

exports.panchayatPerformance = function(REGION_CODE) {
    return "SELECT panchayat_name as region_name from panchayats where panchayat_code=" + REGION_CODE + ";" + 
    "SELECT panchayat_code AS region_code,panchayat_name AS region_name,total_transactions tot_trn,date,ROUND(mrc_mre_mean,2) mrc_mre,ROUND(mre_wlg_mean,2) mre_wlg,ROUND(wlg_wls_mean,2) wlg_wls,ROUND(wls_fto_mean,2) wls_fto,ROUND(fto_firstsign_mean,2) fto_sn1,ROUND(firstsign_secondsign_mean,2) sn1_sn2,ROUND(secondsign_processed_mean,2) sn2_prc FROM panchayat_delays_duration WHERE gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date' AND total_transactions > 0 AND panchayat_code <> '0000000000' AND panchayat_code ='" + REGION_CODE + "' ORDER BY panchayat_code, date;";
};

exports.userBlocks = function(USER_ID) {
    return "SELECT block_code FROM user_blocks WHERE id = " + USER_ID + ");";
};

exports.outcomes = function() {
    return "SELECT outcome, label FROM outcomes;" +
        "SELECT date, mean, upper, outcome, lower, treatment FROM estimates_series;" +
        "SELECT * FROM estimates_summary;" +
        "SELECT date, mean, upper, outcome, lower, arm FROM estimates_series_arms;" + // arm === (1,2,3)
        "SELECT t1_mean, t2_mean, t3_mean, p_val, outcome FROM estimates_summary_arms;";
};

exports.current_musters = function(BLOCK_CODE) {
    return "SELECT IFNULL(a.name,'Unmapped') AS name, IFNULL(a.mobile_no,'Unmapped') AS mobile_no, b.msr_no, b.work_name, b.panchayat_name FROM (SELECT * FROM employees WHERE block_code='"+BLOCK_CODE+"' AND task_assign='GRS') a RIGHT JOIN (SELECT * FROM current_musters WHERE block_code='"+BLOCK_CODE+"') b ON a.map_location = b.panchayat_code ORDER BY name, panchayat_code, msr_no;" +
    "SELECT IFNULL(a.total_panchayat_count,0) AS total_panchayat_count, IFNULL(b.grs_panchayat_count,0) AS grs_panchayat_count FROM (SELECT block_code, count(*) AS total_panchayat_count FROM panchayats WHERE block_code = '" + BLOCK_CODE + "') a LEFT JOIN (SELECT block_code, count(*) AS grs_panchayat_count FROM employees WHERE task_assign = 'GRS' AND block_code = '" + BLOCK_CODE + "') b ON a.block_code = b.block_code;";
};

exports.delayed_musters = function(BLOCK_CODE) {
    return "SELECT IFNULL(a.name,'Unmapped') AS name, IFNULL(a.mobile_no,'Unmapped') AS mobile_no, b.msr_no, b.work_name, b.panchayat_code, b.panchayat_name, DATE_FORMAT(STR_TO_DATE(b.end_date, '%d/%m/%Y'),'%d-%m-%Y') AS end_date, (datediff(CURDATE(), STR_TO_DATE(b.end_date, '%d/%m/%Y')) - 2) AS days_pending, b.step FROM (SELECT * FROM employees WHERE block_code='"+BLOCK_CODE+"' AND task_assign='GRS') a RIGHT JOIN (SELECT * FROM delayed_musters WHERE block_code='"+BLOCK_CODE+"' AND step='ds_t2') b ON a.map_location = b.panchayat_code UNION SELECT IFNULL(a.name,'Unmapped') AS name, IFNULL(a.mobile_no,'Unmapped') AS mobile_no, b.msr_no, b.work_name, b.panchayat_code, b.panchayat_name, DATE_FORMAT(STR_TO_DATE(b.end_date, '%d/%m/%Y'),'%d-%m-%Y') AS end_date, (datediff(CURDATE(), STR_TO_DATE(b.end_date, '%d/%m/%Y')) - 5) AS days_pending, b.step FROM (SELECT * FROM employees WHERE block_code='"+BLOCK_CODE+"' AND task_assign='TA') a RIGHT JOIN (SELECT * FROM delayed_musters WHERE block_code='"+BLOCK_CODE+"' AND step='ds_t5') b ON a.map_location = b.panchayat_code UNION SELECT NULL AS name, NULL AS mobile_no, msr_no, work_name, panchayat_code, panchayat_name, DATE_FORMAT(STR_TO_DATE(end_date, '%d/%m/%Y'),'%d-%m-%Y') AS end_date, (datediff(CURDATE(), STR_TO_DATE(end_date, '%d/%m/%Y')) - CAST(REPLACE(step,'ds_t','') AS UNSIGNED)) AS days_pending, step FROM delayed_musters WHERE block_code='"+BLOCK_CODE+"' AND step NOT IN ('ds_t2','ds_t5') ORDER BY step, name, panchayat_code, msr_no;" +
    "SELECT IFNULL(a.total_panchayat_count,0) AS total_panchayat_count, IFNULL(b.ta_panchayat_count,0) AS ta_panchayat_count, IFNULL(c.grs_panchayat_count,0) AS grs_panchayat_count FROM (SELECT block_code, count(*) AS total_panchayat_count FROM panchayats WHERE block_code = '" + BLOCK_CODE + "') a LEFT JOIN (SELECT block_code, count(*) AS ta_panchayat_count FROM employees WHERE task_assign = 'TA' AND block_code = '" + BLOCK_CODE + "') b ON a.block_code = b.block_code LEFT JOIN (SELECT block_code, count(*) AS grs_panchayat_count FROM employees WHERE task_assign = 'GRS' AND block_code = '" + BLOCK_CODE + "') c ON a.block_code = c.block_code;";
};

exports.cards = function(USER_ID) {
    return "SELECT a.current_total, b.delayed_total, c.time_to_payment, c.total_transactions FROM (SELECT count(*) AS current_total, 1 AS merge FROM current_musters WHERE block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"')) a LEFT JOIN (SELECT count(*) AS delayed_total, 1 AS merge FROM delayed_musters WHERE block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"')) b ON a.merge = b.merge LEFT JOIN (SELECT IFNULL(ROUND(SUM(mrc_processed_mean * total_transactions) / SUM(total_transactions),1),'No Data') AS time_to_payment, IFNULL(SUM(total_transactions),0) AS total_transactions, 1 AS merge FROM block_delays_duration WHERE block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"') AND gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date' and date>=DATE_SUB(now(), INTERVAL 3 MONTH)) c ON b.merge = c.merge;" +
        "SELECT a.staff_id, IFNULL(a.name,'Unmapped') AS name, a.task_assign, IFNULL(a.mobile_no,'Unmapped') AS mobile_no, a.block_name, IFNULL(b.current_total,0) AS current_total, IFNULL(c.delayed_total,0) AS delayed_total, a.msr_no, a.work_name, a.work_code, a.panchayat_name, a.end_date, a.days_pending, a.step, a.type FROM (SELECT a.staff_id, a.name, a.task_assign, a.mobile_no, a.block_name, b.msr_no, b.work_name, b.work_code, b.panchayat_name, b.end_date, NULL as days_pending, NULL AS step, 'current_musters' AS type FROM (SELECT * FROM employees WHERE block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"')) a RIGHT JOIN (SELECT * FROM current_musters WHERE block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"')) b ON a.map_location = b.panchayat_code UNION SELECT a.staff_id, IFNULL(a.name,'Unmapped') AS name, a.task_assign, IFNULL(a.mobile_no,'Unmapped') AS mobile_no, a.block_name, b.msr_no, b.work_name, b.work_code, b.panchayat_name, b.end_date, (datediff(CURDATE(), STR_TO_DATE(b.end_date, '%d/%m/%Y')) - 2) AS days_pending, b.step, 'delayed_musters' AS type FROM (SELECT * FROM employees WHERE block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"') AND task_assign='GRS') a RIGHT JOIN (SELECT * FROM delayed_musters WHERE block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"') AND step='ds_t2') b ON a.map_location = b.panchayat_code UNION SELECT a.staff_id, IFNULL(a.name,'Unmapped') AS name, a.task_assign, IFNULL(a.mobile_no,'Unmapped') AS mobile_no, a.block_name, b.msr_no, b.work_name, b.work_code, b.panchayat_name, b.end_date, (datediff(CURDATE(), STR_TO_DATE(b.end_date, '%d/%m/%Y')) - 5) AS days_pending, b.step, 'delayed_musters' AS type FROM (SELECT * FROM employees WHERE block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"') AND task_assign='TA') a RIGHT JOIN (SELECT * FROM delayed_musters WHERE block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"') AND step='ds_t5') b ON a.map_location = b.panchayat_code) a LEFT JOIN (SELECT count(*) AS current_total, staff_id FROM (SELECT * FROM employees WHERE block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"')) a RIGHT JOIN (SELECT * FROM current_musters WHERE block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"')) b ON a.map_location = b.panchayat_code GROUP BY staff_id) b ON a.staff_id=b.staff_id OR (a.staff_id IS NULL AND b.staff_id IS NULL) LEFT JOIN (SELECT count(*) AS delayed_total, staff_id FROM (SELECT * FROM employees WHERE block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"') AND task_assign='GRS') a RIGHT JOIN (SELECT * FROM delayed_musters WHERE block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"') AND step='ds_t2') b ON a.map_location = b.panchayat_code GROUP BY staff_id UNION SELECT count(*) AS delayed_total, staff_id FROM (SELECT * FROM employees WHERE block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"') AND task_assign='TA') a RIGHT JOIN (SELECT * FROM delayed_musters WHERE block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"') AND step='ds_t5') b ON a.map_location = b.panchayat_code GROUP BY staff_id) c ON a.staff_id=c.staff_id OR (a.staff_id IS NULL AND c.staff_id IS NULL);" +
        "SELECT block_code, block_name,total_transactions tot_trn,date,ROUND(mrc_mre_mean,2) mrc_mre,ROUND(mre_wlg_mean,2) mre_wlg,ROUND(wlg_wls_mean,2) wlg_wls,ROUND(wls_fto_mean,2) wls_fto,ROUND(fto_firstsign_mean,2) fto_sn1,ROUND(firstsign_secondsign_mean,2) sn1_sn2,ROUND(secondsign_processed_mean,2) sn2_prc FROM block_delays_duration WHERE gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date' AND total_transactions > 0 AND block_code IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"') ORDER BY block_code, date;" +
        "SELECT block_code, panchayat_code, panchayat_name,total_transactions tot_trn,date,ROUND(mrc_mre_mean,2) mrc_mre,ROUND(mre_wlg_mean,2) mre_wlg,ROUND(wlg_wls_mean,2) wlg_wls,ROUND(wls_fto_mean,2) wls_fto,ROUND(fto_firstsign_mean,2) fto_sn1,ROUND(firstsign_secondsign_mean,2) sn1_sn2,ROUND(secondsign_processed_mean,2) sn2_prc FROM panchayat_delays_duration WHERE gender = 'both' AND bank_type = 'all' AND date_type = 'processed_date' AND total_transactions > 0 AND panchayat_code <> '0000000000' AND block_code  IN (SELECT region_code FROM user_regions WHERE user_id='"+USER_ID+"') ORDER BY panchayat_code, date;" +
        "SELECT * FROM notifications WHERE user_id = '"+USER_ID+"';";
};