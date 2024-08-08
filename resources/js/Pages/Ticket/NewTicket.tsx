import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/Components/ui/table"
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { PageProps } from "@/types"
import { usePage } from "@inertiajs/react"
import React from "react"

interface Ticket {
  id: number
  nomor_ticket: string
  category: string
  requester: string
  level: string
  deskripsi: string
  status: string
  request_date: string
}

interface CustomPageProps extends PageProps {
  tickets: Ticket[]
}
const NewTicket = ({ auth }: PageProps) => {
  const { tickets } = usePage<CustomPageProps>().props
  return (
    <Authenticated user={auth.user} header={<h2 className="header-text">Tiket Baru</h2>}>
      <div className="py-12">
        <div className="container-size">
          <div className="card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>No</TableHead>
                  <TableHead>Nomor Ticket</TableHead>
                  <TableHead>Requester</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead>Level Prioritas</TableHead>
                  <TableHead>Deskripsi</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Request Date</TableHead>
                  <TableHead>Opsi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((tickets, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{tickets.nomor_ticket}</TableCell>
                    <TableCell>{tickets.requester}</TableCell>
                    <TableCell>{tickets.category}</TableCell>
                    <TableCell>{tickets.level}</TableCell>
                    <TableCell>{tickets.deskripsi}</TableCell>
                    <TableCell>{tickets.status}</TableCell>
                    <TableCell>{tickets.request_date}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Authenticated>
  )
}

export default NewTicket
