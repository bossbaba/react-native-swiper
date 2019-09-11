import React, { Component } from 'react'
import { Text, View,Dimensions,Image } from 'react-native'
import Swiper from 'react-native-swiper'
/*
如果出错请打我一顿QAQ
我使用的RN版本(RN version)是0.60.5
为什么要把样式放进里面，是因为，用的时候发现，有样式加载问题
还有，有大佬解决一下生命周期这个问题吗？
还有，出错请打我一顿QAQ
*/
style = {
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    wrapperview: {
        width:Dimensions.get('window').width
    },
    wrapper: {
    },
    slide: {
        width: Dimensions.get("window").width,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        width: Dimensions.get("window").width
    },
    paginationStyle: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    paginationText: {
        color: 'white',
        fontSize: 20
    }
}

export default class defaultSwiper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgList: [
                require('../assets/img/1.jpg'),
                require('../assets/img/2.jpg'),
                require('../assets/img/3.jpg'),
                require('../assets/img/4.jpg')
            ]
        }
    }
    renderPagination = (index, total, context) => {
        return (
            <View style={{
                ...styles.paginationStyle,
                position: 'absolute',
                bottom: 10,
                right: 10
            }}>
                <Text style={{ color: 'grey' }}>
                    <Text style={{
                        ...styles.paginationText, 
                        color: 'white',
                        fontSize: 20
                    }}>{index + 1}</Text>/{total}
                </Text>
            </View>
        )
    }
    render() {
        return (
            <View style={{ ...style.wrapperview, height: 200 }}>
                <Swiper
                    style={{ ...style.wrapper }}
                    renderPagination={this.renderPagination}
                    loop={true}
                    autoplay={true}
                >
                    {
                        this.props.imgList?this.props.imgList.map((ele, index) => {
                            return (
                                <View key={index} style={{ ...styles.slide, height: 200 }}>
                                    <Image style={{ width: Dimensions.get("window").width, height: 200 }} source={ele} />
                                </View>
                            )
                        }):
                        this.state.imgList.map((ele, index) => {
                            return (
                                <View key={index} style={{ ...styles.slide, height: 200 }}>
                                    <Image style={{ width: Dimensions.get("window").width, height: 200 }} source={ele} />
                                </View>
                            )
                        })
                    }
                </Swiper>
            </View>
        )
    }
}

