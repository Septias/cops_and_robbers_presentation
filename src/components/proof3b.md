- **Proof of 1.**: induction on $n$
- If $q_E \preceq_n p_P$, then $((p_P, q_E), E)$ is labelled with a natural number.
- The statement is true when $n=1$ by the labelling procedure.
- Suppose, for some $m \geq 1$, that it is true when $n=m-1$, and that  $q_E \preceq_m p_P$.
- Then for every $w_E \in \mathcal{A}_E(p_P, q_E)$ either $(p_P, w_E) \in \mathcal{F}$, or there exists $x_P \in \mathcal{A}_P(p_P, w_E)$ such that $w_E \preceq_j x_P$ for some $j < m$.
- Hence, by the labelling procedure, for every $w_E \in \mathcal{A}_E(p_P, q_E)$ either $\mathrm{label}((p_P, w_E), P) = 0$, or there exists $x_P \in \mathcal{A}_P(p_P, w_E)$ such that $(x_P, w_E)$ is labelled with
a natural number.
- In the latter case, by the labelling procedure again, the vertex $((p_P, w_E), P)$ is labelled with a natural number, since every out-neighbour of the vertex $(p_, q_E), E)$ islabelled with a natural number.
- The statement now follows by induction.
