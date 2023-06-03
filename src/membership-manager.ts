import {
  MembershipRefunded as MembershipRefundedEvent,
  MembershipStarted as MembershipStartedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/MembershipManager/MembershipManager"
import {
  MembershipRefunded,
  MembershipStarted,
  OwnershipTransferred
} from "../generated/schema"

export function handleMembershipRefunded(event: MembershipRefundedEvent): void {
  let entity = new MembershipRefunded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.nftId = event.params.nftId
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMembershipStarted(event: MembershipStartedEvent): void {
  let entity = new MembershipStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.nftId = event.params.nftId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
