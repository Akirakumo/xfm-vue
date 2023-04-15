<script setup lang="ts">
import { ref, reactive } from 'vue'

const calendar = ref()
// const date = reactive({
//     value: new Date()
// })
const selectDate = (val: string) => {
    calendar.value.selectDate(val)
}

</script>
<template>
    <el-calendar ref="calendar" class="calendar">
        <template #header="{ date }">
            <span>{{ date }}</span>
        </template>
        <template #date-cell="{ data }">
            <p>
                {{ data.day.split('-').slice(-1)[0] }}
            </p>
        </template>
    </el-calendar>
    <div class="select-date-btn">
        <el-button @click="selectDate('prev-year')" size="small">
            前一年
        </el-button>
        <el-button @click="selectDate('prev-month')" size="small">
            前一月
        </el-button>
        <el-button @click="selectDate('today')" size="small">今天</el-button>
        <el-button @click="selectDate('next-month')" size="small">
            下一月
        </el-button>
        <el-button @click="selectDate('next-year')" size="small">
            下一年
        </el-button>
    </div>
</template>

<style lang="less" scoped>
.calendar {
    padding: 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    --el-calendar-selected-bg-color: #fff;

    :deep(.el-calendar__header) {
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        font-size: 18px;
        font-weight: bolder;
    }

    :deep(.el-calendar__body) {
        padding: 0;
    }

    :deep(.el-calendar-table) {
        thead {
            th {
                padding: 0;
            }
        }

        tbody tr.el-calendar-table__row {
            td {
                border: none;
                height: 30px;
                color: #606266;

                .el-calendar-day {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0;
                    height: 30px;

                    p {
                        width: 26px;
                        height: 26px;
                        line-height: 26px;
                        text-align: center;
                        z-index: 1;
                    }
                }

                &:first-child,
                &:last-child {
                    .el-calendar-day {
                        p {}
                    }
                }

                &.prev,
                &.next {
                    .el-calendar-day {
                        p {
                            color: #eee;
                        }
                    }
                }

                &:hover {
                    background-color: #fff;

                    .el-calendar-day {
                        p {
                            color: #409eff;
                        }
                    }
                }
            }

            .is-selected {
                background-color: #fff;

                .el-calendar-day {
                    p {
                        color: white;
                        background-color: #409eff;
                        border-radius: 50%;
                    }
                }

                &:hover {
                    .el-calendar-day {
                        p {
                            color: #fff;
                        }
                    }
                }
            }

            .is-today {
                .el-calendar-day {
                    p {
                        font-weight: bold;
                    }
                }
            }
        }
    }

    button {
        padding: 3px 10px;
    }

}

.select-date-btn {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>