# Moving stack of 'disks' from one post to another but cannon cover up a smaller disk with a bigger disk.

def towers(size, fromStack, toStack, spareStack):
    if size == 1:
        print 'Move disk from ', fromStack, 'to ', toStack
    else:
        towers(size - 1, fromStack, spareStack, toStack)
        towers(1, fromStack, toStack, spareStack)
        towers(size - 1, spareStack, toStack, fromStack)

towers(7, 'f', 't', 's')
