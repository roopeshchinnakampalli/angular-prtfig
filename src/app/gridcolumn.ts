import { DateFormatComponent } from './components/date-format/date-format.component';
import { TagsComponent } from './components/tags/tags.component';
import { ParentComponent } from './components/parent/parent.component';
import { CreatedByComponent } from './components/created-by/created-by.component';
import { TeamComponent } from './components/team/team.component';
export const defaultColDef = {
    resizable: true,
    sortable: true,
    filter: true,
    enablePivot: true,
    animateRows: true,
    enableRowGroup: true,
    rowGroupPanelShow: true
};
export function applyCellCSSClass(params: any) {
    const wrapAll = params.context.componentParent.wrapAll;
    return wrapAll ? 'cell-wrap-text' : 'cell-nowrap-text';
}
export const rowHeight = 275;
export const paginationPageSize = 20;
export function getOpsprojectLead(params: any) {
    if (params.value && params.data && params.data.proj_ttlupi) {
        return `<a href="javascript:">${params.value}</a>`;
    } else {
        return '--';
    }
}

export function getPriorityValue(params: any) {
    if (params.value && params.data && params.data.priority && params.data.priority.key) {
        return `<i class="priority ${params.value.replace(/[^A-Z.a-z]+/g, '-').toLowerCase()}" ></i> ${params.value}`;
    } else {
        return '--';
    }
}

export function getAssigneeValue(params: any) {
    if (params.value && params.data && params.data.assigneeObj && params.data.assigneeObj.staff && params.data.assigneeObj.staff.upi) {
        return `<a href="javascript:" style="padding-right:5px">${params.value}</a> `;
    } else {
        return '--';
    }
}

export function getStatusValue(params: any) {
    if (params.value && params.data && params.data.status && params.data.status.key) {
        let statuscssClass = '';
        switch (params.data.status.key) {
            case 'In Progress':
                statuscssClass = 'icon-status-inprogress';
                break;
            case 'Not Started':
                statuscssClass = 'icon-status-notstart';
                break;
            case 'On Hold':
                statuscssClass = 'icon-status-onhold';
                break;
            case 'Cancelled':
                statuscssClass = 'icon-status-cancelled';
                break;
            case 'Completed':
                statuscssClass = 'icon-status-completed';
                break;
            case 'Open':
                statuscssClass = 'icon-status-open';
                break;
            case 'Closed':
                statuscssClass = 'icon-status-closed';
                break;
            case 'Resolved':
                statuscssClass = 'icon-status-resolved';
                break;
            default:
                statuscssClass = '';
                break;
        }
        return `<i class="us-sprite mr-2 ${statuscssClass}"></i> <span class="fs-12">${params.value}</span>`;
    } else {
        return '--';
    }
}

export function getDefaultValue(params: any) {
    if (params.value) {
        return params.value;
    } else {
        return '--';
    }
}

export function getDelayedValue(params: any) {
    if (params.value && params.value === 'Yes') {
        return '<i class="us-sprite mr-2 icon-flag-red"></i>';
    } else {
        return '';
    }
}

export function dateComparator(filterLocalDateAtMidnight: any, cellValue: any) {
    const dateAsString = cellValue;
    if (dateAsString == null) { return -1; }
    const dateParts = dateAsString.split('/');
    const cellDate = new Date(Number(dateParts[2]), Number(dateParts[0]) - 1, Number(dateParts[1]));
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
        return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
        return 1;
    }
}

export function getFilterTagDatas(params: any) {
    if (params.data && params.data.tags) {
        const tagLists = [];
        params.data.tags.forEach((elem, index) => {
            tagLists.push(elem.name);
        });
        return tagLists;
    } else {
        return '(Blanks)';
    }
}

export const columnconfig = [
            {
                headerName: 'Title', field: 'title', enableRowGroup: true, sortable: true, type: 'title', width: 218, toolPanelClass: ['tp-silver'],
                cellRenderer: function (params: any) {
                    if (params.value && params.data && params.data.guid) {
                        return `<a href="javascript:">${params.value}</a>`;
                    } else {
                        return '--';
                    }
                },
                chartDataType: 'category',
                autoHeight: true,
                filter: false,
                cellClass: applyCellCSSClass
            },
            {
                headerName: 'assignee', field: 'assignee', id: 'assigneeUPI', type: 'user', width: 165, enableRowGroup: true, sortable: true, toolPanelClass: ['tp-silver'],
                cellRenderer: getAssigneeValue,
                chartDataType: 'category'
            },
            {
                headerName: 'Priority', field: 'priorityKey', width: 120, enableRowGroup: true, sortable: true, toolPanelClass: ['tp-silver'],
                cellRenderer: getPriorityValue,
                chartDataType: 'category'
            },
            {
                headerName: 'category', field: 'categoryKey', width: 150, enableRowGroup: true, sortable: true, toolPanelClass: ['tp-silver'],
                chartDataType: 'category',
                cellRenderer: getDefaultValue
            },
            {
                headerName: 'Status', field: 'statusKey', width: 120, enableRowGroup: true, sortable: true, toolPanelClass: ['tp-silver'],
                cellRenderer: getStatusValue,
                chartDataType: 'category'
            },
            {
                headerName: 'Due Date', field: 'scheduledEnd', width: 110, cellClass: 'cell-wrap', enableRowGroup: true, sortable: true, toolPanelClass: ['tp-silver'],
                cellRendererFramework: DateFormatComponent,
                filter: 'agDateColumnFilter',
                chartDataType: 'category',
                filterParams: {
                    clearButton: true,
                    applyButton: true,
                    comparator: dateComparator,
                    includeBlanksInEquals: false,
                    includeBlanksInLessThan: false,
                    includeBlanksInGreaterThan: false
                }
            },
            {
                headerName: 'Start Date', field: 'scheduledStart', hide: false, type: 'date', width: 110, cellClass: 'cell-wrap', enableRowGroup: true, sortable: true, toolPanelClass: ['tp-silver'],
                cellRendererFramework: DateFormatComponent,
                filter: 'agDateColumnFilter',
                chartDataType: 'category',
                filterParams: {
                    clearButton: true,
                    applyButton: true,
                    comparator: dateComparator,
                    includeBlanksInEquals: false,
                    includeBlanksInLessThan: false,
                    includeBlanksInGreaterThan: false
                }
            },
            {
                headerName: 'Parent', field: 'project.title', hide: false, width: 110, enableRowGroup: true, sortable: true, toolPanelClass: ['tp-silver'],
                chartDataType: 'category',
                filter: false,
                cellRendererFramework: ParentComponent,
            },
            {
                headerName: 'type', hide: false, field: 'typeKey', width: 150, enableRowGroup: true, sortable: true, toolPanelClass: ['tp-silver'],
                chartDataType: 'category',
                cellRenderer: getDefaultValue
            },
            {
                headerName: 'Start Quarter', field: 'quarterStart', hide: false, width: 100, enableRowGroup: true, sortable: true, toolPanelClass: ['tp-silver'],
                chartDataType: 'category',
                cellRenderer: getDefaultValue
            },
            {
                headerName: 'Quarter Due', field: 'quarterDue', hide: false, width: 100, enableRowGroup: true, sortable: true, toolPanelClass: ['tp-silver'],
                chartDataType: 'category',
                cellRenderer: getDefaultValue
            },
            {
                headerName: 'Delayed', field: 'delayed', hide: false, width: 80, enableRowGroup: true, sortable: true, toolPanelClass: ['tp-silver'], cellClass: 'cell-wrap',
                chartDataType: 'category',
                cellRenderer: getDelayedValue
            },
            {
                headerName: 'Tags', field: 'tags', type: 'list', hide: false, width: 80, enableRowGroup: true, sortable: true, toolPanelClass: ['tp-silver'],
                cellRendererFramework: TagsComponent,
                chartDataType: 'category',
                valueGetter: function (params) {
                    if (params.data && params.data.tags) {
                        const tagLists = [];
                        params.data.tags.forEach(function (elem, index) {
                            tagLists.push(elem.name);
                        });
                        return tagLists;
                    } else {
                        return '(Blanks)';
                    }
                }
            },
            {
                headerName: 'Created by', field: 'createdBy', hide: false, id: 'createdByUpi', width: 165, enableRowGroup: true, sortable: true, toolPanelClass: ['tp-silver'],
                cellRendererFramework: CreatedByComponent,
                chartDataType: 'category'
            },
            {
                headerName: 'Team', field: 'assignees', hide: false, enableRowGroup: true, sortable: true, toolPanelClass: ['tp-silver'],
                cellRendererFramework: TeamComponent,
                chartDataType: 'category',
                valueGetter: function (params) {
                    if (params.data && params.data.assignees) {
                        const teamLists = [];
                        params.data.assignees.forEach(function (elem, index) {
                            teamLists.push(elem.fullname);
                        });
                        return teamLists;
                    } else {
                        return '(Blanks)';
                    }
                },

            },
            {
                headerName: '',
                valueGetter: '1',
                field: 'count',
                filter: false,
                cellClass: 'd-none',
                toolPanelClass: 'd-none',
                suppressMenu: true,
                chartDataType: 'series',
                width: 1
            }
        ];

 

