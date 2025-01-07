import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const dashboard = searchParams.get('dashboard')

  if (!dashboard) {
    return NextResponse.json({ error: 'Dashboard parameter is required' }, { status: 400 })
  }

  const grafanaUrl = process.env.GRAFANA_URL
  const grafanaApiKey = process.env.GRAFANA_API_KEY

  if (!grafanaUrl || !grafanaApiKey) {
    console.error('GRAFANA_URL or GRAFANA_API_KEY is not set')
    return NextResponse.json({ error: 'Grafana configuration is missing' }, { status: 500 })
  }

  const apiUrl = `${grafanaUrl}/render/d-solo/${dashboard}?orgId=1&from=now-1h&to=now&panelId=1&width=1000&height=500`

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${grafanaApiKey}`,
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch Grafana graph')
    }

    const imageBuffer = await response.arrayBuffer()
    const base64Image = Buffer.from(imageBuffer).toString('base64')
    const dataUrl = `data:image/png;base64,${base64Image}`

    return NextResponse.json({ url: dataUrl })
  } catch (error) {
    console.error('Error fetching Grafana graph:', error)
    return NextResponse.json({ error: 'Failed to fetch Grafana graph' }, { status: 500 })
  }
}

