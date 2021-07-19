import Head from "next/head";
import { useState, useEffect } from "react";

const Index = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        loadData()
    }, [])
    const loadData = async () => {
        const res = await fetch('/api/pets').then(res => res.json())
        setList(res.data)
    }
    const saveHandle = (event) => {
        if (event.keyCode === 13) {
            if (event.currentTarget.value) {
                fetch('/api/pets', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: event.currentTarget.value
                    })
                }).then(res => {
                    console.log(res)
                    loadData()
                })
            } else {
                alert('请输入内容')
            }
        }
    }
    return <>
        <Head>
            <title>宠物列表</title>
        </Head>
        <ul>
            <li>
                <input placeholder='请输入宠物名' onKeyUp={saveHandle} />
            </li>
        </ul>
        <hr />
        <h1>以下：</h1>
        <ul>
            {list.map(item => <li key={item._id}>
                {item.name}
                <button onClick={()=>delOne(item._id)}>删除</button>
            </li>)}
        </ul>
    </>
}

export default Index