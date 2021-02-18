import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button, Input, Layout, Modal, Space, Table} from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import {CardPacksType} from "../../i1-main/m3-dal/api";
import {useDispatch, useSelector} from "react-redux";
import {addPackTC, getPacksTC, currentPackIdAC, deletePackTC, getCardsTC, updatePack} from './t1-Packs/packs-reducer';
import {AppRootStateType} from "../../i1-main/m2-bll/store";
import {Content, Header} from "antd/es/layout/layout";
import { NavLink } from 'react-router-dom';

export const TableWrapper = () => {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [packName, setPackName] = useState("")

    const state = useSelector<AppRootStateType, Array<CardPacksType>>(s => s.packs.cardPacks)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCardsTC())
    }, [dispatch])

    const showModal = () => {
        setIsModalVisible(true);
    };

    //добовление имя колоды в useState
    const handleSetName = (event: ChangeEvent<HTMLInputElement>) => {setPackName(event.currentTarget.value)}

    //Показать модальное окно
    const showModal = () => {setIsModalVisible(true);};

    // При нажатии в модальном окне кнопки ок
    const handleOk = () => {
        setIsModalVisible(false);
        dispatch(addPackTC({name: packName}))

    };
    // закрытие модалки по кнопке cancel или X
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // забирается id колоды
    const myCallBack = (id: string) => {
        //dispatch(getCardsTC(id))
        dispatch(currentPackIdAC(id))
    }

    const editPackName = () => {
        setIsModalVisible(false)
        dispatch(updatePack({_id: currentId, name: packName}))
        console.log(currentId, packName)
    }

    // hook для создания модалки подтвержения
    function confirm() {
        Modal.confirm({
            title: "Confirm",
            content: 'Please confirm',
            icon: <ExclamationCircleOutlined />,
            okText: "yes",
            okType: 'danger',
            onOk() {
                dispatch(deletePackTC(currentId))
            },
            cancelText: "Nooo",
        })
    }


    const columns: ColumnsType<User> = [
        //Название Колоды
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '20px',
            render: (value: React.ReactNode) => {
                return <div>
                    <NavLink to={PATH.CARDS}>{value}</NavLink>
                </div>;
            },
        },
        //Оценка колоды
        {
            title: 'Grade',
            dataIndex: 'grade',
            key: 'grade',
            sorter: {
                compare: (a: any, b: any) => a.grade - b.grade,
                multiple: 2
            },
            render: (grade: React.ReactNode) => (
                <Space size="middle">
                    <div>{grade}</div>
                </Space>
            ),
        },
        //колиество карт в колоде
        {
            title: 'Cards Count',
            dataIndex: 'cardsCount',
            key: 'cardsCount',
            sorter: {
                compare: (a: any, b: any) => a.cardsCount - b.cardsCount,
                multiple: 1
            },
        },
        //посл. обновлен.
        {
            title: 'Last Update',
            dataIndex: 'lastUpdate',
            key: 'lastUpdate',
        },
        //actions
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <Button>Update</Button>
                    <Button onClick={confirm}>Delete</Button>
                </Space>
            ),
        },
        //
    ];

    const data: User[] = state.map((pack) => ({
        name: pack.name,
        cardsCount: pack.cardsCount,
        lastUpdate: pack.updated.substr(0, 10).replace(/-/g, " "),
        grade: pack.grade,
        key: pack._id
    }))



    // function onChange(sorter: {}) {
    //     // console.log('params', sorter);
    // }
    // function onPaginationChange(e: ChangeEvent<HTMLInputElement>) {
    //     setRangeValue(+e.currentTarget.value)
    // }

    const myCallBack = (id: string) => {
        debugger
        dispatch(getCardsTC(id))
        dispatch(currentPackIdAC(id))
    }

    return (
        <>
            <Layout>
                <Button onClick={showModal}>Add Pack</Button>
                <Modal title="Add Pack" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <span>Pack name: </span><Input onChange={handleSetName}/>
                </Modal>
                <Content>
                    <Table<User>
                        rowKey="uid"
                        dataSource={data}
                        columns={columns}
                        onRow={(record) => {
                            return {
                                onClick: () => { myCallBack(record.key) }, // click row
                            };
                        }}
                        bordered
                        pagination={{
                            position: ['topRight'],
                            defaultPageSize: 10,
                            pageSizeOptions: ['3', '5', '10', '20', '25']
                        }}
                    />
                </Content>
            </Layout>
        </>
    )
}
//pageSize: rangeValue