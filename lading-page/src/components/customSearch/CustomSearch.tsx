import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Dropdown } from 'antd';
const { Search } = Input;

CustomSearch.propTypes = {

};

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
        return <div>
            overlay
        </div>;
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

            // this.keyGlobal = value;
            // this.handleInputChangeDebounce();
        }
    };

    return (
        <div className="container-fluid test-share-holder mb-4 pl-0 pr-0" id="input-search">
            <div className="row rowSearch">
                <div className="col-md-1" />
                <div className="col-md-10">
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
                            <Search
                                ref={inputSearchRef}
                                placeholder="Nhập thông tin Mã cổ đông, CMND, hoặc họ tên để tìm kiếm (Nhập tối thiểu 3 ký tự)"
                                name="key"
                                value={state.key}
                                onChange={handleInputChange}
                                allowClear={true}
                                autoComplete="off"
                            />
                        </div>
                    </Dropdown>
                </div>
                <div className="col-md-1" />
            </div>
            {/* 
            {!AppUtil.DataUtil.isEmpty(key) && !loading && (
                <div className="row title-result">
                    <div className="col-md-12 text-center">
                        <span className="span-title-result">
                            Kết quả tìm kiếm
                            </span>
                        <hr className="title-result-hr" />
                    </div>
                </div>
            )}
            {!AppUtil.DataUtil.isEmpty(key) && !visible && this.renderResultSearch()} */}
        </div>
    );
}

export default CustomSearch;