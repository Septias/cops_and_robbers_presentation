- **Proof of 2.**: induction on $k$.
- It follows from the definitions that the statement is true when $k = 0$.
- If $k = 1$, then we have $(p_P, q_E) \not\in \mathcal{F}$, but for every $w_E \in \mathcal A_E(p_P, q_E)$, the position $(p_P, w_E) \in \mathcal{F}$.
Hence, by definition of the sequence of relations,
$q_E \preceq_1 p_P$.  Since $(p_P, q_E) \not\in \mathcal{F}$, we have $q_E \not\preceq_{0} p_P$. Therefore, the statement is also true when $k = 1$.
- Suppose, for some $t \geq 2$, the statement is true when $ 0 \leq k \leq t-1$, and we have that $\mathrm{label}((p_P, q_E), E) = t$.
Then by the definition of the labelling, $$t-1 \geq \max_{w_E \in \mathcal{A}_E(p_P, q_E)}  \mathrm{label}((p_P, w_E) , P)$$ and equality is achieved at least once.
- By definition of the labelling again, for any the Evader position $w_E \in \mathcal A_E(p_P, q_E)$, $$t-2 \geq \min_{x_P \in \mathcal A_P(p_P, w_E)}  \mathrm{label}((w_P, w_E) , E)$$ and equality is achieved at least once for each $w_E$ with $\mathrm{label}((p_P, w_E) , P) = t-1$.
- Thus, by the induction hypothesis, for every $w_E \in \mathcal A_E(p_P, q_E)$, either $(p_P, w_E) \in \mathcal{F}$, or there exists $x_P \in \mathcal A_P(p_P, w_E)$ such that $w_E \preceq_j x_P$ for some $j < t$, and at least one such $j$ equals $t-1$. Therefore, $q_P \preceq_{t} p_P$ and $q_E \not\preceq_{t - 1} p_P$.
- The statement now follows by induction.
