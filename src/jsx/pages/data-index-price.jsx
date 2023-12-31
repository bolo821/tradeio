import React, {  } from 'react';
 // import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import DataSubmenu from '../layout/data-submenu';



function IndexPrice() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div class="content-body">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card sub-menu">
                            <div class="card-body">
                            <DataSubmenu />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Index Price</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Start Time</th>
                                                <th>Symbol</th>
                                                <th>Index Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2020/03/09 11:13:47</td>
                                                <td>BTC - USDQ</td>
                                                <td>$7847.33</td>
                                            </tr>
                                            <tr>
                                                <td>2020/03/09 11:13:47</td>
                                                <td>BTC - USDQ</td>
                                                <td>$7847.33</td>
                                            </tr>
                                            <tr>
                                                <td>2020/03/09 11:13:47</td>
                                                <td>BTC - USDQ</td>
                                                <td>$7847.33</td>
                                            </tr>
                                            <tr>
                                                <td>2020/03/09 11:13:47</td>
                                                <td>BTC - USDQ</td>
                                                <td>$7847.33</td>
                                            </tr>
                                            <tr>
                                                <td>2020/03/09 11:13:47</td>
                                                <td>BTC - USDQ</td>
                                                <td>$7847.33</td>
                                            </tr>
                                            <tr>
                                                <td>2020/03/09 11:13:47</td>
                                                <td>BTC - USDQ</td>
                                                <td>$7847.33</td>
                                            </tr>
                                            <tr>
                                                <td>2020/03/09 11:13:47</td>
                                                <td>BTC - USDQ</td>
                                                <td>$7847.33</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <Footer2 />
        </>
    )
}

export default IndexPrice;