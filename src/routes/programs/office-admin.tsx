import { createFileRoute } from '@tanstack/react-router'
import {
  DepartmentProgramPage,
  departmentProgramPages,
} from '../../components/programs/DepartmentProgramPage'

export const Route = createFileRoute('/programs/office-admin')({
  component: OfficeAdminDepartmentRoute,
})

function OfficeAdminDepartmentRoute() {
  return <DepartmentProgramPage program={departmentProgramPages.officeAdmin} />
}
