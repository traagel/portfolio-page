import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ServerItem {
  name: string
  image: string
  tag: string
  state: string
  status: string
  ports: string[]
}

interface ServerListProps {
  servers: ServerItem[]
}

export function ServerList({ servers }: ServerListProps) {
  if (!servers || servers.length === 0) {
    return <p className="text-muted-foreground">No servers are currently running.</p>
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {servers.map((server, index) => (
        <Card key={index} className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">{server.name}</CardTitle>
            <CardDescription className="text-muted-foreground">{server.image}:{server.tag}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-card-foreground"><strong>State:</strong> {server.state}</p>
            <p className="text-card-foreground"><strong>Status:</strong> {server.status}</p>
            <p className="text-card-foreground"><strong>Ports:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground">
              {server.ports.map((port, portIndex) => (
                <li key={portIndex}>{port}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

