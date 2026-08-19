# DL-0006: Unit is the car

## Date

2026-08-19

## Decision

The unit of Verivo's economics is the car (VIN), not the owner. LTV is computed per car across owners; CAC is the cost of bringing one car into Verivo; the primary product metric is the continuity rate, the share of histories that survive a change of owner.

## Context

The previous financial model used the user as the unit and never reached profit in 36 months. Canon states that a history belongs to the car.

## Alternatives

Use the owner as the unit.

## Consequences

LTV, CAC, and product performance are measured per car. Continuity across changes of owner is the primary product metric.
