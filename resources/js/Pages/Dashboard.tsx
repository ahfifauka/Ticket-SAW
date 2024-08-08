import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"
import { PageProps } from "@/types"

export default function Dashboard({ auth }: PageProps) {
  return (
    <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}>
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="container-size">
          <div className="card">
            <div className="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
