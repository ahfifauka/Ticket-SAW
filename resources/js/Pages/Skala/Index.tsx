import ConfirmDelete from "@/Components/ConfirmDelete"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/Components/ui/table"
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { PageProps } from "@/types"
import { Head, useForm, usePage } from "@inertiajs/react"
import React from "react"
import SkalaForm from "./_components/SkalaForm"

interface SkalaProps {
  id: number
  level: string
  point: number
}

interface CustomPageProps extends PageProps {
  skala: SkalaProps[]
}
const Index = ({ auth }: PageProps) => {
  const { skala } = usePage<CustomPageProps>().props

  const { delete: destroy } = useForm()

  const handleDelete = (id: number) => {
    destroy(route("skala_level.destroy", { id }), {
      preserveScroll: true,
    })
  }

  return (
    <Authenticated user={auth.user} header={<h2 className="header-text">Skala Level</h2>}>
      <Head title="Skala Level" />
      <div className="py-12">
        <div className="container-size">
          <div className="card space-y-2">
            <div className="flex justify-end">
              <SkalaForm />
            </div>
            <Table>
              <TableHeader>
                <TableRow className="border">
                  <TableHead className="border">Level</TableHead>
                  <TableHead className="border">Point</TableHead>
                  <TableHead className="border">Opsi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {skala.map((skala) => (
                  <TableRow key={skala.id} className="border">
                    <TableHead className="border">{skala.level}</TableHead>
                    <TableHead className="border">{skala.point}</TableHead>
                    <TableHead className="border">
                      <div className="flex gap-2">
                        <SkalaForm skala={skala} />
                        <ConfirmDelete onConfirm={() => handleDelete(skala.id)} />
                      </div>
                    </TableHead>
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
