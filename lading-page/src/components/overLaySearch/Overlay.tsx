import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import AppUtil from '../../constant/AppUtils';
import { CityData } from '../../constant/dataFake';
import Loading from '../loading/Loading';
import DataNoneComponent from '../noneComponent/DataNoneComponent';
import './styles/overlayStyles.scss';

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

    const fetchData = () => {
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

    const debounceLoadData = useCallback(_.debounce(fetchData, 400), [key]);
  
    useEffect(() => {
        debounceLoadData();
    }, [key]);

  
 
    if (_.size(state.data) === 0) {
        return <DataNoneComponent
            contentNone={contentNone}
            style={undefined}
        />;
    }

      
    if (state.loading)
    return <Loading />;


    const renderDataSearch = (dataSearch: any) => {
        return <div className="data-search">
            {
                _.map(dataSearch, (item, index) => {
                    return <div key={item.ID} className="item"> 
                        {item.Title}
                    </div>;
                })
            }
        </div>;
    };

    return <div className="data-search-box">
        {renderDataSearch(state.data)}
    </div>;
}

export default Overlay;