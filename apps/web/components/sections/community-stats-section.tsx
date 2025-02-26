import { GitHubStarsCard } from '@/components/stats/github-stars-card'
import { StatCard } from '@/components/stats/stat-card'
import type { WebsiteMetadata } from '@/lib/mdx'
import { FileCheck, FileText } from 'lucide-react'

interface CommunityStatsSectionProps {
  allProjects: WebsiteMetadata[]
}

/**
 * Displays community statistics about llms.txt implementation and engagement
 *
 * @param props - Component props
 * @param props.allProjects - Array of website metadata for statistics calculation
 *
 * @returns React component displaying community statistics
 *
 * @example
 * ```tsx
 * <CommunityStatsSection allProjects={projects} />
 * ```
 */
export function CommunityStatsSection({ allProjects }: CommunityStatsSectionProps) {
  // Calculate metrics
  const basicImplementations = allProjects.filter(p => p.llmsUrl).length
  const enhancedImplementations = allProjects.filter(p => p.llmsFullUrl).length

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Community Stats</h2>
      <div className="grid md:grid-cols-3 gap-4 md:gap-8">
        <GitHubStarsCard />
        <StatCard
          title="Basic llms.txt"
          value={basicImplementations}
          icon={FileText}
          description="Websites with basic AI-friendly documentation structure"
        />
        <StatCard
          title="Enhanced llms.txt"
          value={enhancedImplementations}
          icon={FileCheck}
          description="Websites with extended AI documentation features"
        />
      </div>
    </section>
  )
}
