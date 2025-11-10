export default function Page() {
  return (
    <div className="grid" style={{ gap: 20 }}>
      <section className="hero">
        <span className="badge">AI Concepts</span>
        <h1>What is an AI agent?</h1>
        <p>
          An <strong>AI agent</strong> is a software system that can perceive its
          environment, reason about goals, and take actions autonomously to
          achieve those goals. Modern agents often use large language models
          (LLMs) as the reasoning core, combined with tools, memory, and a loop
          that plans, acts, and reflects.
        </p>
      </section>

      <section className="card">
        <h2>Core components</h2>
        <div className="grid cols-3">
          <div>
            <strong>Perception</strong>
            <ul>
              <li>Inputs: text, APIs, sensors, files</li>
              <li>State extraction and validation</li>
            </ul>
          </div>
          <div>
            <strong>Reasoning</strong>
            <ul>
              <li>Goal decomposition and planning</li>
              <li>Tool selection and routing</li>
            </ul>
          </div>
          <div>
            <strong>Action</strong>
            <ul>
              <li>Calling tools and services</li>
              <li>Producing outputs or changes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Typical agent loop</h2>
        <ol>
          <li>Understand the task and constraints</li>
          <li>Plan next step(s)</li>
          <li>Invoke tools or APIs</li>
          <li>Observe results and update state</li>
          <li>Reflect and iterate until done</li>
        </ol>
      </section>

      <section className="card">
        <h2>Examples</h2>
        <div className="grid cols-2">
          <div>
            <strong>Research agent</strong>
            <ul>
              <li>Searches the web and summarizes findings</li>
              <li>Tracks sources and confidence</li>
            </ul>
          </div>
          <div>
            <strong>Developer agent</strong>
            <ul>
              <li>Edits code, runs tests, opens PRs</li>
              <li>Respects repository policies</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Strengths and limits</h2>
        <div className="kv">
          <div>
            <strong>Strengths</strong>
            <ul>
              <li>Autonomy and adaptability</li>
              <li>Tool-use for real-world tasks</li>
              <li>Scales across domains</li>
            </ul>
          </div>
          <div>
            <strong>Limits</strong>
            <ul>
              <li>Reliability and hallucinations</li>
              <li>Safety/authorization boundaries</li>
              <li>Latency and cost of tool calls</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>In one sentence</h2>
        <p>
          An AI agent is a goal-driven system that <em>plans</em>,
          <em>uses tools</em>, and <em>learns from feedback</em> to complete
          tasks with minimal human supervision.
        </p>
      </section>
    </div>
  );
}
