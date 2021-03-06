import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import AppUtil from '../../constant/AppUtils';
import { CityData } from '../../constant/dataFake';
import Loading from '../loading/Loading';
import DataNoneConmponent from '../noneComponent/DataNoneConmponent';


Overlay.propTypes = {

};

interface IProps {
    keySearch: string
}

interface IState {
    loading: boolean,
    data: any,
}

function Overlay(props: IProps) {

    const key = _.get(props, 'keySearch', '') || '';
    const contentNone = 'Did not find the result';

    const [state, setState] = useState<IState>({
        loading: true,
        data: [],
    });

    useEffect(() => {
        fecthData();
    }, [key]);


    const fecthData = () => {
        const response = CityData;
        let dataFilter = [];

        if (key) {
            dataFilter = _.filter(response, (item) => {
                const keyTranform = AppUtil.convertViToEn(key, true);
                const cityTitleTranform = AppUtil.convertViToEn(item.Title, true);
                return _.includes(cityTitleTranform, keyTranform);
            });
        }

        setState({
            ...state,
            loading: false,
            data: dataFilter
        });

    };

    if (state.loading)
        return <Loading />;


    if (_.size(state.data) === 0) {
        return <DataNoneConmponent
            contentNone={contentNone}
            style={undefined}
        />;
    }

    const renderDataSearch = (dataSearch: any) => {
        return _.map(dataSearch, (item, index) => {
            return <div key={item.ID}>
                {item.Title}
            </div>;
        });
    };

    return <div className="data-search-box">
        {renderDataSearch(state.data)}
    </div>;
}

export default Overlay;