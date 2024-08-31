

"use client"
import React, { useEffect, useState } from 'react'

const Task = () => {

      const data = [
        {
            name: "mohan",
            salary: 100,
        },
        {
            name: "kevin",
            salary: 200,
        },
        {
            name: "mohan",
            salary: 26,
        },
        {
            name: "shyam",
            salary: 70,
        },
        {
            name: "jk",
            salary: 500,
        },
        {
            name: "mohan",
            salary: 24,
        },
        {
            name: "jk",
            salary: 34,
        },
        {
            name: "kevin",
            salary: 88,
        },
        {
            name: "shyam",
            salary: 100,
        },
        {
            name: "jenish",
            salary: 1000,
        },
      
    ]
    
    useEffect(() => {

        console.log("data",data)
        const setobject = data.reduce((prev, cur) => {
            const allData = prev.find(item => item.name === cur.name);
            if (allData) {
                allData.salary += cur.salary;
            } else {
                prev.push({ name: cur.name, salary: cur.salary });
            }
            return prev;
        }, []);

        console.log("Aggregated Data", setobject);

    }, [])

    return (
        <div className='py-4 text-xl font-semibold uppercase tracking-wide text-blue-200'> <center>Open Consol</center></div>
    )
}

export default Task
