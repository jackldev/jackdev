import type { ProjectProp } from 'types/types'

export function projectFormat({
  projects,
  scheduleProjects = true,
  sortByDate = true,
  limit = undefined
}: {
  projects: ProjectProp[]
  scheduleProjects?: boolean
  sortByDate?: boolean
  limit?: number
}) {
  const filterProjects = projects.reduce((acc, project) => {
    if (scheduleProjects && new Date(project.data.date) > new Date()) {
      return acc
    }

    acc.push(project)

    return acc
  }, [] as ProjectProp[])

  if (sortByDate) {
    return filterProjects
      .sort((a, b) => +b.data.date - +a.data.date)
      .slice(0, limit)
  }
}
