import React from 'react';
import '../assets/pages/Main.scss';
import { MainLeftNav, MainRightNav } from './Main/NavHeaders';
import Search from './Main/Search';
export default class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <section>
                    <div className="w-100 mx-0 row top-header">
                        <div className="col-4 px-0">
                            <MainLeftNav/>
                        </div>
                        <div className="col px-0">
                            <MainRightNav/>
                        </div>
                    </div>
                    <div className="w-100 mx-0 row">
                        <div className="col-4 px-0">
                            <Search/>
                        </div>
                        <div className="col px-0">

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}