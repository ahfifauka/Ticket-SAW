import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/Components/ui/table"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { PageProps } from "@/types"
import { Head, useForm, usePage } from "@inertiajs/react"
import JabatanForm from "./_components/JabatanForm"
import ConfirmDelete from "@/Components/ConfirmDelete"

interface Jabatan {
  id: number
  jabatan: string
  level: number
  point: number
  skala_level_id: number
}

interface CustomPageProps extends PageProps {
  jabatans: Jabatan[]
}

const Index = ({ auth }: PageProps) => {
  const { jabatans } = usePage<CustomPageProps>().props
  const { delete: destroy } = useForm()
  const handleDelete = (id: number) => {
    destroy(route("master_jabatan.destroy", id), {
      preserveScroll: true,
    })
  }

  return (
    <AuthenticatedLayout user={auth.user} header={<h2 className="header-text">Jabatan</h2>}>
      <Head title="Data Jabatan" />
      <div className="py-12">
        <div className="container-size">
          <div className="card space-y-5">
            <div className="flex justify-end">
              <JabatanForm />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Jabatan</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Point</TableHead>
                  <TableHead>Opsi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jabatans.map((jabatan) => (
                  <TableRow key={jabatan.id}>
                    <TableHead>{jabatan.jabatan}</TableHead>
                    <TableHead>{jabatan.level}</TableHead>
                    <TableHead>{jabatan.point}</TableHead>
                    <TableHead>
                      <div className="space-x-2">
                        <JabatanForm jabatan={jabatan} />
                        <ConfirmDelete onConfirm={() => handleDelete(jabatan.id)} />
                      </div>
                    </TableHead>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Index
