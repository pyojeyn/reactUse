import React, { useState, useReducer } from "react";
import Student from "../component/Student";



const ACTION_TYPES = {
    addStudent: 'add-student',
    deleteStudent: 'delete-student',
    markStudent: 'mark-student'
}

const reducer = (state, action) => {
    switch(action.type){
        case ACTION_TYPES.addStudent:
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name, // key랑value 명이랑 같으면 생략 가능
                isHere: false
            }
            return {
                count: state.count + 1,
                students: [...state.students, newStudent]
            }
        case ACTION_TYPES.deleteStudent:
            return {
                count: state.count -1,
                // students: state.students.filter(student =>student.id !== action.payload.id)
                students: state.students.filter(student =>{ return student.id !== action.payload.id})
            }
        case ACTION_TYPES.markStudent:
            console.log("mark-student인뎁쇼");
            return {
                count: state.count,
                students: state.students.map((student) => {
                    if(student.id === action.payload.id){
                        return {...student, isHere: !student.isHere}
                    }
                    return student;
                })
            }
        default:
            return state;
    }
}

const initailState= {
    count: 0,
    students: []
}

const Reducers2 = () => {

    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initailState);


    return (
        <div>
            <h2>출석부</h2>
            <p>총 학생 수 : {studentsInfo.count}</p>
            <input
                type="text"
                placeholder="이름을 입력해 주세요"
                value={name}
                onChange={e=>setName(e.target.value)} 
            />
            <button onClick={() => {
                dispatch({type: ACTION_TYPES.addStudent, payload:{name}})
            }}>추가</button>
            {studentsInfo.students.map(student => {
               return <Student 
                key={student.id}
                name={student.name}
                dispatch={dispatch}
                id={student.id}
                isHere={student.isHere}
                type={ACTION_TYPES}/>
                
            })}
        </div>
    )

}

export default Reducers2;