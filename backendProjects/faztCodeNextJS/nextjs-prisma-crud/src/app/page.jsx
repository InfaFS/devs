import {prisma} from '@/libs/prisma'
import { NextResponse } from 'next/server'
import TaskCard from './components/TaskCard'
async function loadTaks() {
  //  const res = await fetch('http://localhost:3000/api/tasks')
  //  const data = await res.json()
  const tasks = await prisma.task.findMany()   
  return tasks
}

export const dynamic = "force-dynamic"

export default async function Home() {
    const tasks = await loadTaks()

    return (
    <section className="container mx-auto">
        <div className="grid grid-cols-3 gap-3 mt-10">
            {tasks.map(task => (
                <TaskCard task={task} key={task.id}></TaskCard>
        ))}
        </div>
    </section>
    )
}