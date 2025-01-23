
- **Forward direction**: Contrapositive of the forward direction
- Suppose the _condition_ does not hold
-  Then for all $p_P \in \mathcal{I}_P$, there exists $q_E \in \mathcal{I}_E(p_P)$ such that there is no $w_P \in \mathcal{A}_P(p_P, q_E)$ with $q_E \preceq w_P$
- No matter the position $v_p$ to which the persuer moves, the state of the game is $((v_P,q_E), E)$ with $q_E \not\preceq v_P$
- By definition of the sequence of relations, the Evader can move to $x_E \in \mathcal{A}_E(v_P, q_E)$ for which there is no $y_P \in \mathcal{A}_P(v_P,x_E)$ such that $x_E \preceq y_P$.
- By induction, it never occurs that the Pursuer is on $p_P$ and the Evader is on $q_E$ such that $q_E \preceq _0 p_P$; hence, the Evader has a winning strategy.
