import React, { useState } from "react";
import "./resetDatabase.css";

const ResetDatabaseComponent = () => {
    return (
        <div className="recreate-container">
            <table className="recreate-table">
                <tr className="table-header">
                    <td>DayTrader Scenario Runtime Statistics</td>
                    <td>DayTrader</td>
                </tr>
            </table>
            <div className="current-day-trader-heading">
                <table className="trade-reset-part">
                    <tr className="table-reset">
                        <td>Trade Reset completed successfully</td>
                        <td>Modify runtime configuration</td>
                    </tr>
                </table>
            </div>

            <div className="benchmark-runtime">
                <table className="benchmark-runtime-part">
                    <tr className="table-benchmark">
                        <th>Benchmark runtime configuration summary</th>
                        <th>Direct (JDBC)</th>
                    </tr>
                    <tr className="table-benchmark">
                        <td>Run-Time Mode</td>
                        <td>Value</td>
                    </tr>
                    <tr className="table-benchmark">
                        <td>Order-Processing Mode</td>
                        <td>Synchronous</td>
                    </tr>
                    <tr className="table-benchmark">
                        <td>Scenario Workload Mix</td>
                        <td>Standard</td>
                    </tr>
                    <tr className="table-benchmark">
                        <td>Web Interface</td>
                        <td>JSP</td>
                    </tr>
                    <tr className="table-benchmark">
                        <td>Active Traders / Trade User population</td>
                        <td>200 / 200</td>
                    </tr>
                    <tr className="table-benchmark">
                        <td>Active Stocks / Trade Stock population</td>
                        <td>400 / 410</td>
                    </tr>
                </table>
            </div>
            <div className="Benchmark-scenerio">
                <table className="table-benchmark-scenerio">
                    <tr className="row-benchmark-scenerio">
                        Benchmark scenario verification
          </tr>
                </table>
            </div>

            <div className="run-statistics-runtime">
                <table className="run-statistics-runtime-part">
                    <tr className="table-run-statistics">
                        <th>Run Statistic</th>
                        <th>Scenario verification test</th>
                        <th>Expected Value</th>
                        <th>Actual Value</th>
                        <th>Pass/Fail</th>
                    </tr>
                    <tr className="table-run-statistics">
                        <td>Active Stocks</td>
                        <td>
                            Active stocks should generally equal the db population of stocks
            </td>
                        <td>410</td>
                        <td>400</td>
                        <td>Warn</td>
                    </tr>
                    <tr className="table-run-statistics">
                        <td>Active Traders</td>
                        <td>
                            Active traders should generally equal the db population of traders
            </td>
                        <td>200</td>
                        <td>200</td>
                        <td>Pass</td>
                    </tr>
                    <tr className="table-run-statistics">
                        <td>Estimated total requests</td>
                        <td>
                            Actual benchmark scenario requests should be within +/- 2% of the
                            estimated number of requests in the last benchmark run to pass.
            </td>
                        <td>0.0</td>
                        <td>see2</td>
                        <td>see2</td>
                    </tr>
                    <tr className="table-run-statistics">
                        <td>New Users Registered</td>
                        <td>2.0% of expected requests (0.02 * 0.0 )</td>
                        <td>0.0</td>
                        <td>0</td>
                        <td>NA</td>
                    </tr>
                    <tr className="table-run-statistics">
                        <td>Logins</td>
                        <td>4.0% of expected requests (0.04 * 0.0 ) + initial login</td>
                        <td>200.0</td>
                        <td>200</td>
                        <td>NA</td>
                    </tr>
                    <tr className="table-run-statistics">
                        <td>Logouts</td>
                        <td>#logouts must be {">"}= #logins-active traders ( 0 - 200 )</td>
                        <td>-200</td>
                        <td>0</td>
                        <td>Pass</td>
                    </tr>
                    <tr className="table-run-statistics">
                        <td>User Holdings</td>
                        <td>
                            Trade users own an average of 5 holdings, 5* total Users = ( 5 *
                            200)
            </td>
                        <td>1000</td>
                        <td>1024</td>
                        <td>+2.4000000000000057% Pass</td>
                    </tr>
                    <tr className="table-run-statistics">
                        <td>Buy Order Count</td>
                        <td>
                            4.0% of expected requests (0.04 * 0.0 ) + current holdings count
            </td>
                        <td>1024.0</td>
                        <td>1024</td>
                        <td>0.0% Pass</td>
                    </tr>
                    <tr className="table-run-statistics">
                        <td>Sell Order Count</td>
                        <td>4.0% of expected requests (0.04 * 0.0 )</td>
                        <td>0.0</td>
                        <td>0</td>
                        <td>NA</td>
                    </tr>
                    <tr className="table-run-statistics">
                        <td>Total Order Count</td>
                        <td>
                            8.0% of expected requests (0.08 * 0.0 ) + current holdings count
            </td>
                        <td>1024.0</td>
                        <td>1024</td>
                        <td>0.0% Pass</td>
                    </tr>
                    <tr className="table-run-statistics">
                        <td>Open Orders</td>
                        <td>All orders should be completed before reset3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>Pass</td>
                    </tr>

                    <tr className="table-run-statistics">
                        <td>Cancelled Orders</td>
                        <td>
                            Orders are cancelled if an error is encountered during order
                            processing.
            </td>
                        <td>0</td>
                        <td>0</td>
                        <td>Pass</td>
                    </tr>
                    <tr className="table-run-statistics">
                        <td>Orders remaining after reset</td>
                        <td>
                            After Trade reset, each user should carry an average of 5 orders
                            in the database. 5* total Users = (5 * 200)
            </td>
                        <td>1000</td>
                        <td>1024</td>
                        <td>+2.4000000000000057% Pass</td>
                    </tr>
                </table>
            </div>
            <div className="benchmark-scenerio">
                <h1 align="center">Benchmark scenario statistics</h1>
                <ol>
                    <li>Benchmark verification tests require a Trade Reset between each benchmark run.</li>
                    <li>The expected value of benchmark requests is computed based on the the count from the Web application since the last Trade reset.The actual value of benchmark request requires user verification and may be incorrect for a cluster.</li>
                    <li>Orders are processed asynchronously in Trade. Therefore, processing may continue beyond the end of a benchmark run. Trade Reset should not be invoked until processing is completed.</li>
                    <li>Actual values must be within 5% of corresponding estimated values to pass verification.</li>
                    <li>Benchmark verification tests require a Trade Reset between each benchmark run.</li>
                    <li>Benchmark verification tests require a Trade Reset between each benchmark run.</li>
                    <li>Benchmark verification tests require a Trade Reset between each benchmark run.</li>
                    <li>Benchmark verification tests require a Trade Reset between each benchmark run.</li>

                </ol>
            </div>
        </div>
    );
};
export default ResetDatabaseComponent;
