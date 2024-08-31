

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
        const aggregatedData = data.reduce((acc, curr) => {
            const existingEmployee = acc.find(item => item.name === curr.name);
            if (existingEmployee) {
                existingEmployee.salary += curr.salary;
            } else {
                acc.push({ name: curr.name, salary: curr.salary });
            }
            return acc;
        }, []);

        console.log("Aggregated Data", aggregatedData);

    }, [])

    return (
        <div className='py-4 text-xl font-semibold uppercase tracking-wide text-blue-200'> <center>Open Consol</center></div>
    )
}

export default Task
