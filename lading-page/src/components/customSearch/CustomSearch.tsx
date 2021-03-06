import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Dropdown } from 'antd';
import Overlay from '../overLaySearch/Overlay';
import { BACKGROUND_CONSTANT } from '../../constant/ImagesConstant';
import _ from 'lodash';

import './styles/customSearchStyles.scss';

interface IState {
    loading: boolean,
    visible: boolean,
    key: string
}

function CustomSearch(props) {
    const inputSearchRef: any = React.useRef(null);

    const [state, setState] = useState<IState>({
        loading: false,
        visible: false,
        key: ''
    });

    const renderOverlay = () => {
        return <Overlay
            keySearch={state.key}
        />;
    };

    const toggleMenu = () => {
        setState({
            ...state,
            visible: !state.visible
        });
    };

    const handleInputChange = (event: any) => {
        const target = event.target;
        if (target) {
            const name = target.name;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            setState({
                ...state,
                [name]: value
            });
        }
    };

    return (
        <div className="custom-search" id="input-search">
            <div className="search-box">
                <Dropdown
                    overlay={renderOverlay()}
                    placement="bottomCenter"
                    trigger={['click']}
                    getPopupContainer={() => {
                        return document.getElementById('input-search')!;
                    }}
                    visible={state.visible}
                    onVisibleChange={toggleMenu}
                >
                    <div className="input-group" id="div-search">
                        <Input
                            size="large"
                            placeholder="Try Vietnam"
                            prefix={<img src={BACKGROUND_CONSTANT.SearchIcon} />}
                            name="key"
                            value={state.key}
                            onChange={handleInputChange}
                            allowClear={true}
                            style={{ height: 60 }}
                        />
                    </div>
                </Dropdown>
            </div>
        </div>
    );
}

export default CustomSearch;