| Concept                | Pursuer                                      | Evader                                       |
|------------------------|----------------------------------------------|----------------------------------------------|
| Allowed positions      | $\mathcal{P}_P$                              | $\mathcal{P}_E$                              |
| Game positions         | $\mathcal{P} \subseteq \mathcal{P}_P \times \mathcal{P}_E$ | (same set $\mathcal{P}$)                     |
| States                 | $\mathcal{S} \subseteq \mathcal{P} \times \{P, E\}$        | (included in $\mathcal{S}$)                  |
| Allowed moves          | $\mathcal{A}_P(p_P,q_E)$                     | $\mathcal{A}_E(p_P,q_E)$                     |
| Start positions        | $\mathcal{I}_P = \\{ p_P : (p_P, q_E) ∈ \mathcal I \\}$ for any $q_E$            | $\mathcal{I}_E(p_P) = \\{ q_E : (p_P, q_E) ∈ \mathcal I \\}$      |
| Turns                  | Moves first                                  | Moves second                                 |
| Final positions        | $\mathcal{F}$ (Pursuer catches Evader)       | If never in $\mathcal{F}$, Evader “wins”     |
