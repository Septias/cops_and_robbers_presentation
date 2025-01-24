
For an allowed start position $(p_P, q_E) \in \mathcal{I}$, define
- $\ell(p_P, q_E) = \min\\{j: q_E \preceq_j p_P\\} \text{ if } q_E \preceq_j p_P $
- $\ell(p_P, q_E) = 1 + \max_{w_P \in \mathcal{A}_P(p_P, q_E))} \min\\{j: q_E \preceq_j w_P\\}  \text{ otherwise}$

Fixed version:

- $\ell(p_P, q_E) = \min\\{j: q_E \preceq_j p_P\\} \text{ if } q_E \preceq_j p_P $
- $\ell(p_P, q_E) = 1 + \min_{w_P \in \mathcal{A}_P(p_P, q_E))} \max\\{j: q_E \preceq_j w_P\\}  \text{ otherwise}$

