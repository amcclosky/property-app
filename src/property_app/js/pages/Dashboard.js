import React from "react"

import AppLayout from "components/layout/AppLayout"

const Dashboard = ({ pageContent }) => <div>{pageContent}</div>

Dashboard.layout = (page) => (
  <AppLayout children={page} title="Dashboard" section="dashboard" />
)

export default Dashboard