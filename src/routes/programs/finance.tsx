import { createFileRoute } from '@tanstack/react-router'
import {
  DepartmentProgramPage,
  departmentProgramPages,
} from '../../components/programs/DepartmentProgramPage'

export const Route = createFileRoute('/programs/finance')({
  component: FinanceDepartmentRoute,
})

function FinanceDepartmentRoute() {
  return <DepartmentProgramPage program={departmentProgramPages.finance} />
}
