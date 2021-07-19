import Head from "next/head";
import { useState, useEffect } from "react";

const Index = () => {
    const [list, setList] = useState([])
    const [text, setText] = useState('')
    useEffect(() => {
        loadData()
    }, [])
    const loadData = async () => {
        const res = await fetch('/api/pets').then(res => res.json())
        setList(res.data)
    }
    const saveHandle = (event: any) => {
        if (event.keyCode === 13) {
            if (event.currentTarget.value) {
                fetch('/api/pets', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: event.currentTarget.value
                    })
                }).then(_ => loadData())
            } else {
                alert('请输入内容')
            }
        }
    }
    const editOne = (_id: string) => {
        fetch('/api/pets/' + _id, { method: 'PUT', body: JSON.stringify({ name: text }) })
            .then(_ => loadData())
    }
    const delOne = (_id: string) => {
        fetch('/api/pets/' + _id, { method: 'DELETE' })
            .then(_ => loadData())
    }
    return <>
        <Head>
            <title>宠物列表</title>
        </Head>
        <ul>
            <li>
                <input placeholder='请输入宠物名' onKeyUp={saveHandle} onChange={event => { setText(event.target.value) }} />
            </li>
        </ul>
        <hr />
        <h1>以下：</h1>
        <ul>
            {list.map((item:any) => <li key={item._id}>
                {item.name}
                <button style={{ marginLeft: 100 }} onClick={() => editOne(item._id)}>修改</button>
                <button style={{ marginLeft: 100 }} onClick={() => delOne(item._id)}>删除</button>
            </li>)}
        </ul>
    </>
}

export default Index