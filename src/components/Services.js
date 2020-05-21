import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaBeer, FaShuttleVan} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
            icon:<FaCocktail/>,
            title:'free cocktails',
            info: 'loren ipsum helo welcome to the page here is your website my first react application!'
        },
        {
            icon:<FaHiking/>,
            title:'endless hiking',
            info: 'loren ipsum helo welcome to the page here is your website my first react application!'
        },
        {
            icon:<FaShuttleVan/>,
            title:'free shuttle service',
            info: 'loren ipsum helo welcome to the page here is your website my first react application!'
        },
        {
            icon:<FaBeer/>,
            title:'strongest beer',
            info: 'loren ipsum helo welcome to the page here is your website my first react application!'
        }]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services'/>
                <div className='services-center'>
                    {this.state.services.map((item,index)=>{
                            return (
                                <article key={index} className='service'>
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            )
                    })}
                </div>
            </section>
        )
    }
}
