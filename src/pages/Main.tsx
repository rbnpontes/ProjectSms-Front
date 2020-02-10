import React from 'react';
import '../assets/pages/Main.scss';
import { MainLeftNav, MainRightNav } from './Main/NavHeaders';
import Search from './Main/Search';
import { PlaceholderMessage } from '../components/PlaceholderContact';
export default class Main extends React.Component {
    private get messages() {
        let arr = new Array(10);
        for (let i = 0; i < arr.length; i++)
            arr[i] = i;
        return arr;
    }
    render() {
        return (
            <div className="main">
                <section>
                    <div className="w-100 mx-0 row top-header">
                        <div className="col-4 px-0">
                            <MainLeftNav />
                        </div>
                        <div className="col px-0">
                            <MainRightNav />
                        </div>
                    </div>
                    <div className="w-100 mx-0 row">
                        <div className="col-4 px-0">
                            <Search />
                            <div className="conversation-field">
                                {this.messages.map(x => (
                                    <PlaceholderMessage />
                                ))}
                            </div>
                        </div>
                        <div className="col px-0">
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}