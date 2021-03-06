'use strict';

import React from 'react';

const Sort = React.createClass({
    sort(event) {
        this.props.sortBy(event.target.value);

        ga('send', 'event', {
            eventCategory: 'Sort Dropdown',
            eventAction: 'selected',
            eventLabel: this.props.translation[event.target.value]
        });
    },
    render: function() {
        var _this = this;
        return (
            <select
                onChange={this.sort}
                className="sort-bar button u-pull-right"
                defaultValue="0"
                name=""
                id="sort-controls"
            >
                <option value="0" disabled="true">
                    {_this.props.translation.sort_by}
                </option>
                {_this.props.sortList.map(function(option, i) {
                    return (
                        <option key={i} value={option}>
                            {_this.props.translation[option]}
                        </option>
                    );
                })}
            </select>
        );
    }
});

export default Sort;
