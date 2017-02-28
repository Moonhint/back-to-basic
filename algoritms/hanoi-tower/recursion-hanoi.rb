# initial towers
tower = 10

#save the result (the steps need to be taken) in this array
@results = []

def rec_hanoi(n, src="A", helper="B", dest="C")
  if n == 1
    @results.push("#{src} -> #{dest}")
  else
    rec_hanoi(n-1, src, dest, helper)
    @results.push("#{src} -> #{dest}")
    rec_hanoi(n-1, helper, src, dest)
  end
end

#call the recursion here
rec_hanoi(tower)

#print the result
@results.each {|x| puts x}
puts "#{tower} initial tower: #{@results.length} steps"
