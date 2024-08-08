import InputError from "@/Components/InputError"
import { Label } from "@/Components/ui/label"
import Authenticated from "@/Layouts/AuthenticatedLayout"
import { PageProps } from "@/types"
import { Head, useForm, usePage } from "@inertiajs/react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"
import { Textarea } from "@/Components/ui/textarea"
import { Button } from "@/components/ui/button"
import React from "react"
import { error } from "console"

interface Level {
  id: number
  level: string
}

interface Case_category {
  id: number
  category: string
}

interface CustomPageProps extends PageProps {
  level: Level[]
  case_category: Case_category[]
}

const OpenTicket = ({ auth }: PageProps) => {
  const { level, case_category } = usePage<CustomPageProps>().props
  const { post, data, setData, errors, reset, processing } = useForm({
    level: "",
    case_category_id: "",
    deskripsi: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    post(route("ticket.store"), {
      preserveScroll: true,
      onSuccess: () => {
        setData({
          level: "",
          case_category_id: "",
          deskripsi: "",
        })
        reset()
      },
    })
  }

  return (
    <Authenticated user={auth.user} header={<h2 className="header-text">Open Ticket</h2>}>
      <Head title="Open Ticket" />
      <div className="py-12">
        <div className="container-size max-w-4xl">
          <div className="card">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label>Level Penanganan</Label>
                <Select onValueChange={(value) => setData("level", value.toString())} defaultValue={data.level}>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Pilih Level Penanganan" />
                  </SelectTrigger>
                  <SelectContent>
                    {level.map((item) => (
                      <SelectItem key={item.id} value={item.id.toString()}>
                        {item.level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <InputError message={errors.level} />
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Select onValueChange={(value) => setData("case_category_id", value.toString())} defaultValue={data.case_category_id}>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Pilih Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    {case_category.map((item) => (
                      <SelectItem key={item.id} value={item.id.toString()}>
                        {item.category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <InputError message={errors.case_category_id} />
              </div>
              <div className="space-y-2">
                <Label>Deskripsi</Label>
                <Textarea value={data.deskripsi} onChange={(e) => setData("deskripsi", e.target.value)} />
                <InputError message={errors.deskripsi} />
              </div>
              <div className="space-y-2">
                <Button className="w-full" disabled={processing}>
                  Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Authenticated>
  )
}

export default OpenTicket
