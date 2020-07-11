import React, {Component} from 'react';
import {Lazy} from 'react-lazy';

class WorkCard extends Component {

    render() {
        const {title, img, desc} = this.props;
        return (
            <div className="w-full md:w-1/3 lg:1/4 p-2 relative group cursor-pointer">
                <div className="h-48 xl:h-64 w-full">
                    <Lazy ltIE9 className="h-full w-full">
                    <img src={img} alt={title} className="h-full w-auto object-cover object-center"/>
                    </Lazy>
                </div>
                <div className="absolute bg-opacity-75 bg-black top-0 left-0 right-0 bottom-0 m-2 hidden group-hover:block">
                    <div className="pt-8 px-4">
                        <h1 className="mb-2 font-bold">{title}</h1>
                        <p className="text-sm">{desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkCard;