import React, {useState, useRef} from 'react'
import {Input, Button, Icon, Upload, Form} from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import './style.css'
import Axios from 'axios'

function HobbyStoryPage(props) {

    const token = localStorage.getItem('Authorization')

    //form 제작
    const [Title, setTitle] = useState("")
    const [Content, setContent] = useState("")
    const [FileName, setFileName] = useState("")
    // const [File, setFile] = useState([])
    //파일 업로더 생성
    // const fileInput = useRef(null)

    //event-handler 제작
    const titleHandler = (event) => {
        setTitle(event.target.value)
    }
    const contentHandler = (event) => {
        setContent(event.target.value)
    }
    const fileNameHandler = (event) => {
        setFileName(event.target.value)
    }

    // const onChange = (event) => {
    //     if(event.target.files[0]) {
    //         //업로딩이 되면
    //         const targetFile = event.target.files[0];
    //         const name = (event.target.files[0].name) + (event.target.files[0].lastModified)
    //         const type = event.target.files[0].type
    //         const headers = {
    //             Authorization: token
    //         }
            
    //         Axios
    //             .get(`https://hoppy.kro.kr/api/upload/presigned?filename=${name}&contentType=${type}`, {
    //                 headers,
    //                 withCredentials: false
    //             })
    //             .then(response => {
    //                 if(response.data.status === 200) {
    //                     setFile(response.data.data.url)
    //                 }
    //                 const req = new Request(response.data.data.url, {
    //                     method: 'PUT',
    //                     headers: {
    //                         'Content-Type': type,
    //                     },
    //                     body: targetFile
    //                 });
    //                 return fetch(req);
    //             })
    //             .then(response => {
    //                 console.log('res>>>>>', response)
    //                 if(response.status === 200) {
    //                     const url = new URL(response.url)
    //                     setFileName(url.origin + url.pathname)
    //                     alert("사진 업로드에 성공했습니다.")
    //                 } else {
    //                     alert("사진 업로드에 실패했습니다.")
    //                 }
    //             })
    //         setFile(event.target.files[0])
    //     }
    //     else {
    //         //업로드를 취소하면
    //         return
    //     }
    //     // console.log('ff', EditProfileUrl)
    //     // //프로필 사진 나타내기
    //     // const reader = new FileReader();
    //     // reader.onload = () => {
    //     //     console.log('reader.readyState', reader)
    //     //     if(reader.readyState === 2) {
    //     //         setFile(reader.result)
    //     //     }
    //     // }
    //     // reader.readAsDataURL(event.target.files[0])
    // }

    //글 올리기 버튼 event-handler
    const submitHandler = (event) => {
        event.preventDefault();
        if (!Title && !Content) {
            return alert("제목과 내용을 입력해주세요.")
        } else if (Title && Content) {
            const body = {
                title: Title,
                content: Content,
                filename: FileName
            }

            const headers = {
                Authorization: token
            }
            Axios
                .post("https://hoppy.kro.kr/api/story/upload", body, {
                    headers,
                    withCredentials: false
                })
                .then(response => {
                    console.log('res>>>>', response)
                    if (response.data.status === 200) {
                        alert('스토리를 업로드했습니다.')
                        props
                            .history
                            .push('/hobbystory')
                    } else {
                        alert('스토리 업로드에 실패했습니다.')
                    }
                })
        }
    }

    // const fileList = [//필수적으로 들어가야 할 값들
    //     {
    //         uid: 'hi',
    //         name: 'xxx.png',
    //         status: 'done',
    //         url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //         thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    //     }
    // ]

    return (
        <div
            style={{
                textAlign: 'center',
                width: '100%'
            }}>
            <div
                style={{
                    width: '100%',
                    margin: '3rem auto'
                }}>
                <p
                    style={{
                        textAlign: 'left',
                        marginLeft: '27px',
                        fontSize: '16px'
                    }}>취미 스토리</p>
                <Form onSubmitCapture={submitHandler}>
                    <div>
                        <Input
                            placeholder="제목을 작성해주세요."
                            onChange={titleHandler}
                            value={Title}
                            style={{
                                width: "350px",
                                height: "46px",
                                background: "#F0F0F0",
                                borderRadius: "14px",
                                margin: "10px 10px 16px 11px",
                                fontSize: "12px"
                            }}/>
                        <TextArea
                            type='textarea'
                            placeholder="글을 작성해주세요."
                            onChange={contentHandler}
                            value={Content}
                            style={{
                                width: "350px",
                                height: "282px",
                                background: "#F0F0F0",
                                borderRadius: "14px",
                                margin: "0px 10px 16px 11px",
                                fontSize: "12px",
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-all'
                            }}
                            maxLength={1000}/> 
                        {/* https://jaeyongchoi.tistory.com/2 */}
                        {/* https://sunnykim91.tistory.com/132 */}
                        <Upload
                            //push할 api 주소 작성
                            action="" listType="picture" maxCount={1} className="uploadListStyle" onChange={fileNameHandler} value={FileName}>
                            <Button
                                style={{
                                    width: "350px",
                                    height: "46px",
                                    background: "#FFFFFF",
                                    margin: "0px 20px 0px 11px",
                                    borderRadius: "14px",
                                    color: "#000000",
                                    textAlign: "center",
                                    fontSize: "12px",
                                    fontWeight: "10px"
                                }}>
                                <Icon
                                    type="camera"
                                    style={{
                                        fontSize: "15px"
                                    }}/>
                                사진 첨부하기
                            </Button>
                        </Upload>
                        <Button
                            htmlType='submit'
                            style={{
                                width: '128px',
                                height: '38px',
                                background: '#D3BA9C',
                                borderRadius: '19px',
                                marginTop: '38px'
                            }}>
                            글 올리기
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default HobbyStoryPage