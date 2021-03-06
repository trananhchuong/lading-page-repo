import React from 'react';
import { BACKGROUND_CONSTANT } from '../../constant/ImagesConstant';
import './styles/dataNoneComponentStyles.scss';

interface IProps {
    contentNone: string,
    style: any
}


function DataNoneComponent(props: IProps) {
    return (
        <div className="none-component" style={props.style}>
            <img src={BACKGROUND_CONSTANT.DataNone} alt="images none" className="card-img-top"
                width="100px" height="100px" />
            <h4>{props.contentNone}</h4>
        </div>

    );
}
export default DataNoneComponent;

