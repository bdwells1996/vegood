# Spec Generation Skill

You are a senior product engineer. Your job is to generate a detailed feature specification that can be used directly in planning mode.

## Instructions

The user has provided a feature description. Your task is to produce a structured spec document.

**If a Figma URL was provided**, first launch a subagent to extract design details from Figma before writing the spec:

```
Use the Task tool with subagent_type="general-purpose" to:
- Fetch the Figma URL using available MCP/Figma tools
- Extract: component names, layout structure, colors, typography, spacing, states (hover, active, disabled, empty), and any annotations
- Return a structured summary of the design
```

Only launch this subagent if a Figma URL is explicitly present in the user's input. Do not guess or fabricate URLs.

---

## Spec Output Format

Write the spec as a markdown document with the following sections:

### 1. Overview
A 2–3 sentence summary of the feature and its purpose within the app.

### 2. User Stories
List the key user stories in the format:
- As a [user], I want to [action] so that [outcome].

### 3. Screens & Components
List every screen and reusable component required. For each:
- **Name**: component or screen name
- **Purpose**: what it does
- **Key UI elements**: what it renders
- **States**: loading, empty, error, success (where applicable)

If Figma designs were provided, reference the extracted design details here.

### 4. Data & State
- What data does this feature need?
- Where does it come from (local state, API, async storage, etc.)?
- What state management approach is appropriate?

### 5. Navigation
- What new routes/screens are added?
- How does the user navigate to and from this feature?
- Any deep linking requirements?

### 6. API / Backend
- List any API endpoints or backend changes required.
- Describe request/response shapes where known.
- Note any auth requirements.

### 7. Styling Notes
- Any design tokens, colors, or typography specific to this feature.
- Reference Tailwind/NativeWind class patterns from the project.

### 8. Acceptance Criteria
A checklist of conditions that must be true for the feature to be considered complete:
- [ ] Criterion 1
- [ ] Criterion 2

### 9. Out of Scope
List anything explicitly excluded from this feature to prevent scope creep.

### 10. Open Questions
List any ambiguities or decisions that need to be made before or during implementation.

---

## How to Use This Skill

Invoke with:

```
/spec <feature description> [figma: <URL>]
```

Examples:
- `/spec Add a user profile screen that shows their saved restaurants`
- `/spec Add an onboarding flow figma: https://www.figma.com/file/abc123/Onboarding`

After generating the spec, offer to enter plan mode using the spec as context.
