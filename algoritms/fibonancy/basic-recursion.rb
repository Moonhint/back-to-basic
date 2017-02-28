def time_diff_milli(start, finish)
   (finish - start) * 1000.0
end

def fibo(n)
  if (n == 0)
    return 0
  elsif (n == 1)
    return 1
  else
    return fibo(n-1) + fibo(n-2)
  end
end

t1 = Time.now
40.times do |i|
  ret = fibo(i)
  puts "F" + i.to_s + " : " + ret.to_s
end

t2 = Time.now

msecs = time_diff_milli t1, t2

puts ""
puts "Start Time: " + t1.to_s
puts "End Time: " + t2.to_s
puts "Execute Time: " + msecs.to_s + "ms"
