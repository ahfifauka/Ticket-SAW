import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/Components/ui/table"
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { PageProps } from "@/types"
import { Head, usePage } from "@inertiajs/react"
import React from "react"
import CaseForm from "./_components/CaseForm"

interface Case {
  id: number
  category: string
}

interface CustomPageProps extends PageProps {
  cases: Case[]
}
const Index = ({ auth }: PageProps) => {
  const { cases } = usePage<CustomPageProps>().props

  return (
    <Authenticated user={auth.user} header={<h2 className="header-text">Case Category</h2>}>
      <Head title="Data Case Category" />
      <div className="py-12">
        <div className="container-size">
          <div className="card space-y-3">
            <div className="flex justify-end">
              <CaseForm />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Opsi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cases.map((cases, index) => (
                  <TableRow key={index}>
                    <TableCell>{cases.category}</TableCell>
                    <TableCell>
                      <CaseForm cases={cases} />
                    </TableCell>
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

export default Index
