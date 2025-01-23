
For an allowed start position $(p_P, q_E) \in \mathcal{I}$, define
$$\ell(p_P, q_E) =
\begin{cases}
\min\{j: q_E \preceq_j p_P\}& \text{ if } q_E \preceq_j p_P,\\
1 + \max_{w_P \in \mathcal{A}_P(p_P, q_E))} \min\\{j: q_E \preceq_j w_P\\}&  \text{ otherwise.}\\
\end{cases}
$$

- Assuming the Persuer has a winning strategy, we can define the game length
