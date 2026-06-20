import { createFileRoute } from '@tanstack/react-router'
import {
  DepartmentProgramPage,
  departmentProgramPages,
} from '../../components/programs/DepartmentProgramPage'

export const Route = createFileRoute('/programs/public-relation')({
  component: PublicRelationDepartmentRoute,
})

function PublicRelationDepartmentRoute() {
  return <DepartmentProgramPage program={departmentProgramPages.publicRelation} />
}
