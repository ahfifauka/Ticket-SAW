import ConfirmDelete from "@/Components/ConfirmDelete"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/Components/ui/table"
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { PageProps } from "@/types"
import { Head, Link, useForm, usePage } from "@inertiajs/react"
import { useEffect } from "react"
import KaryawanForm from "./_components/KaryawanForm"

interface Karyawan {
  data: {
    id: number
    name: string
    email: string
  }
  meta: {
    current_page: number
    from: number
    last_page: number
    links: {
      url: string | null
      label: string
      active: boolean
    }[]
    path: string
    per_page: number
    to: number
    total: number
  }
}

interface CustomPageProps extends PageProps {
  karyawan: {
    data: Karyawan["data"][]
    meta: Karyawan["meta"]
  }
}

const Index = ({ auth }: PageProps) => {
  const { karyawan, meta } = usePage<CustomPageProps>().props
  const { delete: destroy } = useForm()
  const handleDelete = (id: number) => {
    destroy(route("akun_karyawan.destroy", id), {
      preserveScroll: true,
    })
  }
  return (
    <Authenticated user={auth.user} header={<h2 className="header-text">Data Akun Karyawan</h2>}>
      <Head title="Akun Karyawan" />
      <div className="py-12">
        <div className="container-size">
          <div className="card space-y-3">
            <div className="flex justify-end">
              <KaryawanForm />
            </div>
            <Table>
              <TableHeader>
                <TableRow className="border">
                  <TableHead className="border">No</TableHead>
                  <TableHead className="border">Pegawai</TableHead>
                  <TableHead className="border">Email</TableHead>
                  <TableHead className="border">Opsi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {karyawan.data.map((item, index) => (
                  <TableRow key={index} className="border">
                    <TableHead className="border">{index + 1}</TableHead>
                    <TableHead className="border">{item.name}</TableHead>
                    <TableHead className="border">{item.email}</TableHead>
                    <TableHead className="border">
                      <div className="flex gap-2">
                        <KaryawanForm karyawan={item} />
                        <ConfirmDelete onConfirm={() => handleDelete(item.id)} />
                      </div>
                    </TableHead>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex justify-between items-center gap-x-3 mt-5 px-10">
              <div>
                <small className="text-muted-foreground">
                  Page {karyawan.meta.current_page} from {karyawan.meta.last_page}
                </small>
              </div>
              <div className="flex gap-x-3">
                {karyawan.meta.links.map((link, index) => {
                  if (link.label === "&laquo; Previous" || link.label === "Next &raquo;") {
                    return null
                  }
                  return (
                    <Link key={index} href={link.url ? link.url : ""} className={`border px-3 py-2 rounded-md aspect-square ${karyawan.meta.current_page.toString() === link.label ? "bg-stone-900 text-white" : ""}`}>
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  )
}

export default Index
