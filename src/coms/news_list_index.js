import React, {Component} from 'react'
import {List, Avatar, Icon} from 'antd';
import {Row, Col} from 'antd';


const listData = [];
for (let i = 0; i < 6; i++) {
    listData.push({
        href: '#',
        title: `公司召开第四届董事会第三次会议 ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: '公司召开第四届董事会第三次会议',
        content: '7月31日下午，上海现代物流投资发展有限公司第四届董事会第三次会议在百联集团304会议室召开。会议由公司董事长孙丰主持，公司董事赵陈斌、史小龙、杨帆、徐波参加会议，监事钱文艺及公司其他领导班子成员列席会议。会议通报并审议了十项议程。（现代物流）',
    });
}

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);


export default class News_index extends Component {

    render() {
        return (

            <div>
                <Row>
                    <div className="newsTitle">
                    <span>新闻中心</span>
                    </div>
                </Row>
            <Row>
                <Col span={20} offset={2}>
                    <List
                        grid={{gutter: 16, column: 2}}
                        itemLayout="vertical"
                        size="large"
                        pagination={
                            {
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 6,
                            }}
                        pagination={false}
                        dataSource={listData}
                        renderItem={item => (

                            <List.Item
                                key={item.title}
                                /*actions={[<IconText type="star-o" text="156"/>, <IconText type="like-o" text="156"/>,
                                    <IconText type="message" text="2"/>]}*/
                                extra={<img width={200} height={200} alt="logo"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar}/>}
                                    title={<a href={item.href}>{item.title}</a>}
                                    /*description={item.description}*/
                                />
                                {item.content}
                            </List.Item>

                        )}
                    />
                </Col>
            </Row>
            </div>
        );
    }
}